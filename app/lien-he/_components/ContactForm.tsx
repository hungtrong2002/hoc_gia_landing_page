'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContactStore } from '@/store/contactStore';
import styles from './ContactForm.module.css';

const schema = z.object({
  name: z.string().min(2, 'Vui lòng nhập họ tên (ít nhất 2 ký tự)'),
  phone: z
    .string()
    .regex(/^(0|\+84)[0-9]{9}$/, 'Số điện thoại không hợp lệ'),
  email: z.string().email('Email không hợp lệ'),
  service: z.string().min(1, 'Vui lòng chọn dịch vụ'),
  message: z.string().min(10, 'Nội dung ít nhất 10 ký tự'),
});

type FormValues = z.infer<typeof schema>;

const SERVICE_OPTIONS = [
  'Thiết kế kiến trúc',
  'Thiết kế nội thất',
  'Tư vấn kết cấu',
  'Giám sát thi công',
  'Cải tạo công trình',
  'Khác',
];

export default function ContactForm() {
  const { status, setStatus } = useContactStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('loading');
    try {
      /* Simulate API call — replace with real endpoint */
      await new Promise((res) => setTimeout(res, 1200));
      console.info('Contact form submitted:', data);
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successBox} role="alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3>Gửi thành công!</h3>
        <p>Cảm ơn bạn đã liên hệ. Đội ngũ HỌC GIA sẽ phản hồi trong vòng 24 giờ.</p>
        <button className={styles.resetBtn} onClick={() => useContactStore.getState().reset()}>
          Gửi yêu cầu khác
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        {/* Name */}
        <div className={styles.field}>
          <input
            id="name"
            type="text"
            placeholder=" "
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          <label htmlFor="name" className={styles.label}>Họ và tên *</label>
          {errors.name && (
            <span id="name-error" className={styles.error} role="alert">{errors.name.message}</span>
          )}
        </div>

        {/* Phone */}
        <div className={styles.field}>
          <input
            id="phone"
            type="tel"
            placeholder=" "
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            {...register('phone')}
          />
          <label htmlFor="phone" className={styles.label}>Số điện thoại *</label>
          {errors.phone && (
            <span id="phone-error" className={styles.error} role="alert">{errors.phone.message}</span>
          )}
        </div>
      </div>

      {/* Email */}
      <div className={styles.field}>
        <input
          id="email"
          type="email"
          placeholder=" "
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        <label htmlFor="email" className={styles.label}>Email *</label>
        {errors.email && (
          <span id="email-error" className={styles.error} role="alert">{errors.email.message}</span>
        )}
      </div>

      {/* Service select */}
      <div className={styles.field}>
        <select
          id="service"
          className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
          aria-describedby={errors.service ? 'service-error' : undefined}
          {...register('service')}
          defaultValue=""
        >
          <option value="" disabled hidden>Chọn dịch vụ</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <label htmlFor="service" className={`${styles.label} ${styles.labelSelect}`}>Dịch vụ quan tâm *</label>
        {errors.service && (
          <span id="service-error" className={styles.error} role="alert">{errors.service.message}</span>
        )}
      </div>

      {/* Message */}
      <div className={styles.field}>
        <textarea
          id="message"
          rows={5}
          placeholder=" "
          className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        <label htmlFor="message" className={styles.label}>Nội dung yêu cầu *</label>
        {errors.message && (
          <span id="message-error" className={styles.error} role="alert">{errors.message.message}</span>
        )}
      </div>

      {status === 'error' && (
        <p className={styles.submitError} role="alert">
          Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua số hotline.
        </p>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting || status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Đang gửi…
          </>
        ) : (
          'Gửi yêu cầu tư vấn'
        )}
      </button>
    </form>
  );
}
