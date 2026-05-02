export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface USP {
  iconName: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  fullTitle: string;
  sapo: string;
  image: string;
  imageAlt: string;
  processImage: string;
  metaTitle: string;
  metaDescription: string;
  relatedCategory: string;
  process: ProcessStep[];
  usps: USP[];
}

export const SERVICES: Service[] = [
  {
    slug: 'xay-dung-cong-nghiep',
    title: 'Xây Dựng Công Nghiệp',
    fullTitle: 'Tổng Thầu Xây Dựng Công Trình Công Nghiệp',
    sapo:
      'Chúng tôi đảm nhận toàn bộ quy trình từ thiết kế kỹ thuật đến bàn giao nhà máy, kho xưởng và khu công nghiệp — đúng tiến độ, đúng ngân sách, đúng tiêu chuẩn quốc tế.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    imageAlt: 'Thi công nhà máy khu công nghiệp',
    processImage: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&q=80',
    metaTitle: 'Tổng Thầu Xây Dựng Công Trình Công Nghiệp | HỌC GIA',
    metaDescription:
      'HỌC GIA nhận tổng thầu xây dựng nhà máy, kho xưởng, khu công nghiệp tại TP.HCM và các tỉnh lân cận. Tiêu chuẩn ISO, bàn giao đúng tiến độ.',
    relatedCategory: 'cong-nghiep',
    process: [
      {
        step: 1,
        title: 'Khảo sát & Lập hồ sơ yêu cầu',
        description:
          'Đội ngũ kỹ sư tiến hành khảo sát thực địa, đánh giá địa chất nền móng, thu thập đầy đủ yêu cầu kỹ thuật và sản xuất của chủ đầu tư để lập bộ hồ sơ thiết kế cơ sở.',
      },
      {
        step: 2,
        title: 'Thiết kế kỹ thuật & Dự toán',
        description:
          'Lập bản vẽ thi công chi tiết theo tiêu chuẩn TCVN, tính toán kết cấu, hệ thống M&E và lập dự toán chi phí minh bạch theo từng hạng mục.',
      },
      {
        step: 3,
        title: 'Thi công & Giám sát',
        description:
          'Triển khai thi công theo đúng tiến độ cam kết, giám sát 3 lớp (nội bộ, tư vấn độc lập và chủ đầu tư), cập nhật nhật ký công trình hàng ngày.',
      },
      {
        step: 4,
        title: 'Kiểm tra nghiệm thu',
        description:
          'Kiểm tra toàn diện từng hạng mục trước khi bàn giao: thử tải kết cấu, kiểm tra hệ thống phòng cháy, điện, nước và đo đạc kỹ thuật theo QCVN.',
      },
      {
        step: 5,
        title: 'Bàn giao & Bảo hành',
        description:
          'Bàn giao hồ sơ hoàn công đầy đủ, đào tạo vận hành cho nhân viên chủ đầu tư và thực hiện bảo hành công trình tối thiểu 24 tháng theo hợp đồng.',
      },
    ],
    usps: [
      {
        iconName: 'shield',
        title: 'An toàn tuyệt đối',
        description: 'Quy trình an toàn QCVN 18:2021 được áp dụng nghiêm ngặt trên mọi công trường.',
      },
      {
        iconName: 'clock',
        title: 'Đúng tiến độ',
        description: 'Cam kết bàn giao đúng hạn với hệ thống quản lý tiến độ theo tuần.',
      },
      {
        iconName: 'star',
        title: 'Chất lượng ISO 9001',
        description: 'Kiểm soát chất lượng vật liệu và thi công theo tiêu chuẩn ISO 9001:2015.',
      },
      {
        iconName: 'award',
        title: 'Đội ngũ chuyên gia',
        description: 'Hơn 50 kỹ sư kinh nghiệm từ 5–15 năm trong lĩnh vực xây dựng công nghiệp.',
      },
    ],
  },
  {
    slug: 'xay-dung-dan-dung',
    title: 'Xây Dựng Dân Dụng',
    fullTitle: 'Thi Công Xây Dựng Dân Dụng Cao Tầng',
    sapo:
      'Từ chung cư cao tầng đến biệt thự thấp tầng và tòa văn phòng thương mại — HỌC GIA mang đến giải pháp xây dựng hiện đại, bền vững và tối ưu giá trị đầu tư.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    imageAlt: 'Tòa nhà chung cư dân dụng cao tầng',
    processImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    metaTitle: 'Thi Công Xây Dựng Dân Dụng Cao Tầng | HỌC GIA',
    metaDescription:
      'HỌC GIA nhận tổng thầu xây dựng chung cư, biệt thự, tòa nhà văn phòng thương mại tại TP.HCM. Thiết kế hiện đại, thi công bền vững.',
    relatedCategory: 'dan-dung',
    process: [
      {
        step: 1,
        title: 'Tư vấn & Phát triển ý tưởng',
        description:
          'Lắng nghe nhu cầu và định hướng của chủ đầu tư, đề xuất concept kiến trúc phù hợp với ngân sách và quy hoạch địa phương.',
      },
      {
        step: 2,
        title: 'Thiết kế kiến trúc & Kết cấu',
        description:
          'Lập hồ sơ thiết kế kiến trúc, kết cấu, hệ thống MEP (điện — cơ — ống) tích hợp, trình thẩm duyệt và xin phép xây dựng.',
      },
      {
        step: 3,
        title: 'Thi công phần thô',
        description:
          'Thi công nền móng, khung sườn kết cấu và hoàn thành phần thô theo đúng bản vẽ, đảm bảo độ an toàn kết cấu và chịu tải.',
      },
      {
        step: 4,
        title: 'Hoàn thiện & M&E',
        description:
          'Lắp đặt toàn bộ hệ thống điện, nước, điều hòa, phòng cháy và hoàn thiện nội thất cơ bản theo tiêu chuẩn TCVN 9377.',
      },
      {
        step: 5,
        title: 'Nghiệm thu & Bàn giao',
        description:
          'Nghiệm thu toàn bộ công trình, cấp hồ sơ hoàn công, thực hiện bảo hành 24–60 tháng tùy hạng mục theo quy định pháp luật.',
      },
    ],
    usps: [
      {
        iconName: 'building',
        title: 'Kinh nghiệm cao tầng',
        description: 'Đã thi công hơn 30 tòa nhà từ 5 đến 25 tầng tại TP.HCM và vùng lân cận.',
      },
      {
        iconName: 'leaf',
        title: 'Vật liệu xanh',
        description: 'Ưu tiên sử dụng vật liệu thân thiện môi trường, tiết kiệm năng lượng.',
      },
      {
        iconName: 'shield',
        title: 'Kết cấu an toàn',
        description: 'Thiết kế kết cấu chống động đất cấp VII, kiểm tra bởi đơn vị độc lập.',
      },
      {
        iconName: 'users',
        title: 'Đồng hành chủ đầu tư',
        description: 'Báo cáo tiến độ hàng tuần và họp công trình định kỳ với ban quản lý.',
      },
    ],
  },
  {
    slug: 'cai-tao-sua-chua',
    title: 'Cải Tạo & Sửa Chữa',
    fullTitle: 'Cải Tạo Nâng Cấp Công Trình Xây Dựng',
    sapo:
      'Hồi sinh không gian cũ với giải pháp cải tạo toàn diện — tăng giá trị bất động sản, nâng cao chất lượng sống mà không cần phá bỏ và xây mới hoàn toàn.',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80',
    imageAlt: 'Cải tạo và sửa chữa công trình',
    processImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&q=80',
    metaTitle: 'Cải Tạo Nâng Cấp Công Trình Xây Dựng | HỌC GIA',
    metaDescription:
      'HỌC GIA chuyên cải tạo, sửa chữa, nâng cấp nhà ở, chung cư, văn phòng tại TP.HCM. Thi công nhanh, không phát sinh, bảo hành dài hạn.',
    relatedCategory: 'cai-tao',
    process: [
      {
        step: 1,
        title: 'Khảo sát hiện trạng',
        description:
          'Đánh giá toàn diện hiện trạng kết cấu, hệ thống kỹ thuật và hoàn thiện. Xác định rủi ro ẩn và lập danh mục hạng mục cần cải tạo.',
      },
      {
        step: 2,
        title: 'Lập phương án & Dự toán',
        description:
          'Đề xuất nhiều phương án cải tạo theo thứ tự ưu tiên và ngân sách. Dự toán chi tiết từng hạng mục, cam kết không phát sinh chi phí.',
      },
      {
        step: 3,
        title: 'Thi công cải tạo',
        description:
          'Thi công từng giai đoạn để giảm thiểu gián đoạn hoạt động. Bảo vệ và bảo quản đồ đạc, tài sản của chủ nhà trong suốt quá trình.',
      },
      {
        step: 4,
        title: 'Kiểm tra & Hoàn thiện',
        description:
          'Kiểm tra kỹ lưỡng từng hạng mục sau hoàn thành, xử lý ngay các điểm chưa đạt và vệ sinh toàn bộ công trình trước bàn giao.',
      },
      {
        step: 5,
        title: 'Bàn giao & Hướng dẫn',
        description:
          'Bàn giao công trình cùng bộ hồ sơ as-built, hướng dẫn sử dụng và bảo trì các hệ thống mới lắp đặt. Bảo hành 12–24 tháng.',
      },
    ],
    usps: [
      {
        iconName: 'zap',
        title: 'Thi công nhanh',
        description: 'Quy trình thi công tối ưu, giảm thiểu thời gian ngừng hoạt động của công trình.',
      },
      {
        iconName: 'shield',
        title: 'Không phát sinh',
        description: 'Cam kết không phát sinh chi phí ngoài dự toán, mọi điều chỉnh đều có xác nhận văn bản.',
      },
      {
        iconName: 'home',
        title: 'Tôn trọng tài sản',
        description: 'Bảo vệ toàn bộ nội thất và tài sản hiện có trong suốt quá trình thi công.',
      },
      {
        iconName: 'award',
        title: 'Thợ lành nghề',
        description: 'Đội thợ chuyên biệt cho từng hạng mục: sơn, ốp lát, điện, nước, trần thạch cao.',
      },
    ],
  },
  {
    slug: 'ha-tang-ky-thuat',
    title: 'Hạ Tầng Kỹ Thuật',
    fullTitle: 'Thi Công Hạ Tầng Kỹ Thuật Khu Đô Thị',
    sapo:
      'Xây dựng hệ thống hạ tầng kỹ thuật đồng bộ — đường nội bộ, cấp thoát nước, điện và viễn thông — tạo nền tảng vững chắc cho mọi khu đô thị và khu công nghiệp.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    imageAlt: 'Hạ tầng kỹ thuật đường nội bộ khu đô thị',
    processImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80',
    metaTitle: 'Thi Công Hạ Tầng Kỹ Thuật Khu Đô Thị | HỌC GIA',
    metaDescription:
      'HỌC GIA thi công hạ tầng kỹ thuật: đường nội bộ, hệ thống thoát nước, điện nước viễn thông cho khu đô thị, khu công nghiệp tại TP.HCM.',
    relatedCategory: 'ha-tang',
    process: [
      {
        step: 1,
        title: 'Khảo sát địa hình & Thiết kế',
        description:
          'Đo đạc địa hình tỉ lệ 1:500, khảo sát địa chất, thiết kế toàn bộ mạng lưới hạ tầng kỹ thuật đồng bộ và lập hồ sơ xin phép thi công.',
      },
      {
        step: 2,
        title: 'Chuẩn bị mặt bằng',
        description:
          'San lấp, đầm nền, đào hào kỹ thuật và xây dựng hệ thống công tác tạm thời đảm bảo an toàn cho công nhân và khu vực xung quanh.',
      },
      {
        step: 3,
        title: 'Thi công hệ thống ngầm',
        description:
          'Lắp đặt hệ thống thoát nước, cấp nước, điện ngầm và viễn thông theo đúng bản vẽ thiết kế và tiêu chuẩn kỹ thuật.',
      },
      {
        step: 4,
        title: 'Thi công đường & Hạ tầng nổi',
        description:
          'Thi công đường nội bộ, vỉa hè, đèn đường, cây xanh và các công trình nổi đồng bộ với hệ thống ngầm.',
      },
      {
        step: 5,
        title: 'Thử nghiệm & Bàn giao',
        description:
          'Kiểm tra áp lực đường ống, thử tải đường, kiểm tra hệ thống điện và bàn giao toàn bộ hồ sơ as-built cho ban quản lý khu.',
      },
    ],
    usps: [
      {
        iconName: 'map',
        title: 'Quy hoạch đồng bộ',
        description: 'Thiết kế toàn bộ hệ thống hạ tầng tích hợp, tránh chồng chéo và xung đột kỹ thuật.',
      },
      {
        iconName: 'droplets',
        title: 'Thoát nước bền vững',
        description: 'Hệ thống thoát nước tính toán theo tiêu chuẩn chống ngập cho chu kỳ mưa 10 năm.',
      },
      {
        iconName: 'zap',
        title: 'Điện & Viễn thông',
        description: 'Thi công hạ tầng điện và viễn thông ngầm sẵn sàng cho kết nối 5G.',
      },
      {
        iconName: 'clock',
        title: 'Bảo hành dài hạn',
        description: 'Bảo hành đường và hệ thống thoát nước lên đến 36 tháng sau bàn giao.',
      },
    ],
  },
  {
    slug: 'tu-van-thiet-ke',
    title: 'Tư Vấn & Thiết Kế',
    fullTitle: 'Tư Vấn Quản Lý Dự Án & Thiết Kế Công Trình',
    sapo:
      'Dịch vụ tư vấn toàn diện từ lập dự án đầu tư đến giám sát thi công — giúp chủ đầu tư kiểm soát chi phí, rủi ro và chất lượng trong suốt vòng đời công trình.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    imageAlt: 'Tư vấn và thiết kế bản vẽ công trình',
    processImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    metaTitle: 'Tư Vấn Quản Lý Dự Án & Thiết Kế Công Trình | HỌC GIA',
    metaDescription:
      'HỌC GIA cung cấp dịch vụ tư vấn lập dự án, thiết kế kiến trúc, giám sát thi công và quản lý dự án xây dựng chuyên nghiệp tại TP.HCM.',
    relatedCategory: 'tu-van',
    process: [
      {
        step: 1,
        title: 'Nghiên cứu khả thi',
        description:
          'Phân tích thị trường, đánh giá tính khả thi tài chính và kỹ thuật, lập báo cáo nghiên cứu khả thi đầu tư làm cơ sở quyết định của chủ đầu tư.',
      },
      {
        step: 2,
        title: 'Lập hồ sơ thiết kế',
        description:
          'Lập thiết kế cơ sở, thiết kế kỹ thuật và bản vẽ thi công theo tiêu chuẩn Việt Nam và quốc tế, phù hợp yêu cầu thẩm duyệt pháp lý.',
      },
      {
        step: 3,
        title: 'Lập dự toán & Đấu thầu',
        description:
          'Lập dự toán chi tiết, hỗ trợ tổ chức đấu thầu, đánh giá hồ sơ dự thầu và tư vấn lựa chọn nhà thầu phù hợp nhất.',
      },
      {
        step: 4,
        title: 'Giám sát thi công',
        description:
          'Giám sát chất lượng thi công tại công trường, kiểm tra nghiệm thu vật liệu, ghi chép nhật ký công trình và báo cáo tiến độ định kỳ.',
      },
      {
        step: 5,
        title: 'Quyết toán & Lưu trữ hồ sơ',
        description:
          'Hỗ trợ quyết toán công trình, kiểm tra hồ sơ hoàn công, bàn giao đầy đủ bộ hồ sơ pháp lý và kỹ thuật theo quy định.',
      },
    ],
    usps: [
      {
        iconName: 'clipboard',
        title: 'Quản lý rủi ro',
        description: 'Nhận diện và quản lý rủi ro dự án từ giai đoạn lập kế hoạch đến hoàn thành.',
      },
      {
        iconName: 'chart',
        title: 'Kiểm soát chi phí',
        description: 'Hệ thống quản lý chi phí theo EVM giúp phát hiện lệch ngân sách sớm nhất.',
      },
      {
        iconName: 'star',
        title: 'Chuyên gia có chứng chỉ',
        description: 'Đội ngũ tư vấn với chứng chỉ PMP, RICS và kinh nghiệm dự án quốc tế.',
      },
      {
        iconName: 'shield',
        title: 'Độc lập & Trung thực',
        description: 'Tư vấn giám sát độc lập, bảo vệ quyền lợi tối đa cho chủ đầu tư.',
      },
    ],
  },
  {
    slug: 'noi-that-cao-cap',
    title: 'Nội Thất Cao Cấp',
    fullTitle: 'Thiết Kế & Thi Công Nội Thất Cao Cấp',
    sapo:
      'Biến không gian sống và làm việc thành tác phẩm nghệ thuật — kết hợp thẩm mỹ đương đại với công năng tối ưu, sử dụng vật liệu cao cấp được tuyển chọn kỹ lưỡng.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    imageAlt: 'Thi công nội thất không gian sống cao cấp',
    processImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    metaTitle: 'Thiết Kế & Thi Công Nội Thất Cao Cấp | HỌC GIA',
    metaDescription:
      'HỌC GIA thiết kế và thi công nội thất cao cấp cho căn hộ, biệt thự, văn phòng tại TP.HCM. Vật liệu nhập khẩu, thợ lành nghề, bảo hành 24 tháng.',
    relatedCategory: 'noi-that',
    process: [
      {
        step: 1,
        title: 'Tư vấn phong cách & Mood board',
        description:
          'Gặp gỡ, lắng nghe sở thích và lối sống của gia chủ. Xây dựng mood board thể hiện phong cách, bảng màu và định hướng vật liệu để thống nhất trước khi thiết kế.',
      },
      {
        step: 2,
        title: 'Thiết kế 3D & Phối cảnh',
        description:
          'Lập bản vẽ mặt bằng, thiết kế 3D từng phòng với ánh sáng thực tế, cho phép gia chủ "trải nghiệm" không gian trước khi thi công.',
      },
      {
        step: 3,
        title: 'Tuyển chọn vật liệu',
        description:
          'Tư vấn và cung ứng vật liệu nội thất cao cấp: gỗ tự nhiên, đá marble, kim loại hoàn thiện PVD và vải bọc nhập khẩu châu Âu.',
      },
      {
        step: 4,
        title: 'Thi công & Kiểm soát chất lượng',
        description:
          'Đội thợ chuyên biệt thi công từng hạng mục: đồ gỗ, ốp lát, sơn bả, điện âm tường và ánh sáng — kiểm tra chất lượng từng chi tiết.',
      },
      {
        step: 5,
        title: 'Bàn giao & Styling',
        description:
          'Bàn giao không gian hoàn chỉnh kèm dịch vụ styling décor, hướng dẫn bảo quản vật liệu và bảo hành toàn bộ hạng mục 24 tháng.',
      },
    ],
    usps: [
      {
        iconName: 'palette',
        title: 'Thiết kế độc quyền',
        description: 'Mỗi không gian là một tác phẩm riêng biệt, không tái sử dụng template.',
      },
      {
        iconName: 'gem',
        title: 'Vật liệu cao cấp',
        description: 'Hợp tác với các thương hiệu vật liệu hàng đầu châu Âu và Việt Nam.',
      },
      {
        iconName: 'users',
        title: 'Thợ lành nghề',
        description: 'Thợ thi công nội thất với tối thiểu 7 năm kinh nghiệm, được đào tạo chuyên sâu.',
      },
      {
        iconName: 'award',
        title: 'Bảo hành 24 tháng',
        description: 'Bảo hành toàn bộ hạng mục nội thất 24 tháng, bảo trì định kỳ theo yêu cầu.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
