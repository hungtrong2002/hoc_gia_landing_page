export type PostCategory = 'kien-thuc' | 'tin-cong-ty' | 'thong-cao-bao-chi';

export type Block =
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'img'; src: string; alt: string; width: number; height: number; caption?: string };

export type TOCItem = { id: string; text: string; level: 'h2' | 'h3' };

export interface Post {
  slug: string;
  title: string;
  sapo: string;
  category: PostCategory;
  publishedAt: string;
  readTime: number;
  author: string;
  coverImage: string;
  coverAlt: string;
  content: Block[];
  tags: string[];
  metaTitle: string;
  metaDescription: string;
}

export const CATEGORY_LABELS: Record<PostCategory, string> = {
  'kien-thuc': 'Kiến Thức',
  'tin-cong-ty': 'Tin Công Ty',
  'thong-cao-bao-chi': 'Thông Cáo Báo Chí',
};

export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNkOGU0Y2UiLz48L3N2Zz4=';

export const POSTS: Post[] = [
  /* ─── KIẾN THỨC ─── */
  {
    slug: '5-tieu-chi-chon-nha-thau-xay-dung-uy-tin',
    title: '5 Tiêu Chí Vàng Để Chọn Nhà Thầu Xây Dựng Uy Tín',
    sapo: 'Một nhà thầu sai có thể biến giấc mơ về ngôi nhà hoặc công trình của bạn thành cơn ác mộng tài chính. Hướng dẫn thực tế này giúp bạn đặt đúng câu hỏi trước khi ký hợp đồng.',
    category: 'kien-thuc',
    publishedAt: '2025-03-15',
    readTime: 7,
    author: 'KS. Nguyễn Minh Đức',
    coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
    coverAlt: 'Kỹ sư xem xét bản vẽ thi công tại công trường',
    tags: ['nhà thầu', 'xây dựng', 'tư vấn', 'kinh nghiệm'],
    metaTitle: '5 Tiêu Chí Chọn Nhà Thầu Xây Dựng Uy Tín | HỌC GIA',
    metaDescription: 'Hướng dẫn chi tiết 5 tiêu chí quan trọng để đánh giá và lựa chọn nhà thầu xây dựng uy tín, tránh rủi ro và tiết kiệm chi phí.',
    content: [
      {
        type: 'p',
        text: 'Thị trường xây dựng Việt Nam hiện nay có hàng nghìn nhà thầu ở mọi quy mô và phân khúc. Tuy nhiên, không phải đơn vị nào cũng đủ năng lực, uy tín và minh bạch để bạn có thể tin tưởng giao phó công trình trị giá hàng tỷ đồng. Dưới đây là 5 tiêu chí bạn nhất định phải kiểm tra trước khi ký bất kỳ hợp đồng nào.',
      },
      {
        type: 'h2',
        id: 'lich-su-cong-trinh',
        text: '1. Lịch sử công trình đã hoàn thành',
      },
      {
        type: 'p',
        text: 'Một nhà thầu uy tín luôn sẵn sàng cho bạn xem danh mục dự án đã thực hiện — bao gồm địa chỉ cụ thể, tên chủ đầu tư và số điện thoại liên hệ để bạn có thể xác minh trực tiếp. Đừng bao giờ chỉ tin vào hình ảnh trên brochure hay website.',
      },
      {
        type: 'p',
        text: 'Hãy đặt câu hỏi: "Họ đã từng thi công công trình cùng loại và quy mô với dự án của tôi chưa?" Một nhà thầu có hồ sơ năng lực toàn là biệt thự thấp tầng sẽ không phải lựa chọn tối ưu cho tòa nhà văn phòng 15 tầng của bạn.',
      },
      {
        type: 'quote',
        text: 'Kinh nghiệm là thứ không thể mua hay giả mạo được. Hãy nói chuyện trực tiếp với các chủ đầu tư trước đó — đó là nguồn thông tin đáng tin cậy nhất bạn có thể có.',
        cite: 'KS. Trần Văn Hùng — Giám đốc Kỹ thuật HỌC GIA',
      },
      {
        type: 'h2',
        id: 'nang-luc-tai-chinh',
        text: '2. Năng lực tài chính và bảo lãnh hợp đồng',
      },
      {
        type: 'p',
        text: 'Nhiều chủ đầu tư bỏ qua tiêu chí này và hối hận sau khi công trình bị dừng giữa chừng vì nhà thầu mất khả năng thanh toán. Một nhà thầu có năng lực tài chính lành mạnh sẽ không ngần ngại cung cấp bảo lãnh thực hiện hợp đồng (performance bond) từ ngân hàng uy tín.',
      },
      {
        type: 'ul',
        items: [
          'Yêu cầu báo cáo tài chính 2 năm gần nhất (được kiểm toán)',
          'Yêu cầu bảo lãnh thực hiện hợp đồng 5–10% giá trị',
          'Kiểm tra xem nhà thầu có đang nợ nhà cung cấp vật liệu hay không',
          'Xem xét quy mô và số lượng dự án đang triển khai song song',
        ],
      },
      {
        type: 'h2',
        id: 'doi-ngu-ky-thuat',
        text: '3. Đội ngũ kỹ thuật và chứng chỉ hành nghề',
      },
      {
        type: 'p',
        text: 'Theo quy định pháp luật, các chức danh kỹ thuật chủ chốt trong một dự án xây dựng đều phải có chứng chỉ hành nghề do Bộ Xây dựng cấp. Hãy yêu cầu nhà thầu cung cấp danh sách cán bộ kỹ thuật sẽ trực tiếp phụ trách dự án của bạn, kèm theo bản sao chứng chỉ hành nghề.',
      },
      {
        type: 'p',
        text: 'Ngoài chứng chỉ, hãy hỏi về kinh nghiệm trực tiếp của các kỹ sư trên công trường. Một kỹ sư 10 năm kinh nghiệm trực tiếp thi công sẽ có khả năng xử lý sự cố tốt hơn nhiều so với người chỉ ngồi trong văn phòng.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
        alt: 'Kỹ sư kiểm tra chất lượng kết cấu tại công trường',
        width: 800,
        height: 533,
        caption: 'Giám sát chất lượng tại công trường — không thể bỏ qua',
      },
      {
        type: 'h2',
        id: 'he-thong-quan-ly-chat-luong',
        text: '4. Hệ thống quản lý chất lượng và an toàn',
      },
      {
        type: 'p',
        text: 'Một nhà thầu chuyên nghiệp sẽ có quy trình kiểm soát chất lượng rõ ràng: kiểm tra vật liệu đầu vào, nghiệm thu từng hạng mục, ghi nhật ký công trình hàng ngày. Hãy hỏi họ có hệ thống quản lý chất lượng ISO 9001 không, và nếu không thì họ kiểm soát chất lượng như thế nào.',
      },
      {
        type: 'p',
        text: 'An toàn lao động không chỉ là trách nhiệm đạo đức mà còn là chỉ số tin cậy về năng lực quản lý. Nhà thầu có hồ sơ tai nạn lao động sạch, trang bị PPE đầy đủ cho công nhân là nhà thầu biết quản lý rủi ro — và đó chính là người bạn muốn quản lý công trình của mình.',
      },
      {
        type: 'h2',
        id: 'hop-dong-minh-bach',
        text: '5. Hợp đồng minh bạch và điều khoản bảo hành',
      },
      {
        type: 'p',
        text: 'Hợp đồng xây dựng phải quy định rõ: phạm vi công việc chi tiết, tiến độ từng giai đoạn, điều khoản phạt chậm tiến độ, quy trình xử lý phát sinh, và điều khoản bảo hành cụ thể cho từng hạng mục. Nhà thầu không muốn ký điều khoản phạt chậm tiến độ là dấu hiệu đỏ rõ ràng.',
      },
      {
        type: 'ol',
        items: [
          'Đọc kỹ từng điều khoản — đặc biệt phần phạt và bồi thường',
          'Yêu cầu phụ lục chi tiết liệt kê từng hạng mục và đơn giá',
          'Bảo hành tối thiểu: 12 tháng cho hoàn thiện, 60 tháng cho kết cấu',
          'Điều khoản thanh toán phải gắn với nghiệm thu thực tế, không phải lịch cố định',
        ],
      },
      {
        type: 'p',
        text: 'Chọn đúng nhà thầu là quyết định quan trọng nhất trong cả dự án. Dành thêm 2–4 tuần để thẩm định kỹ lưỡng có thể giúp bạn tiết kiệm hàng trăm triệu đến hàng tỷ đồng, cùng vô số đau đầu và tranh chấp pháp lý sau này.',
      },
    ],
  },
  {
    slug: 'quy-trinh-thi-cong-noi-that-tu-a-den-z',
    title: 'Quy Trình Thi Công Nội Thất Từ A Đến Z: Những Điều Bạn Cần Biết',
    sapo: 'Hiểu đúng quy trình thi công nội thất giúp bạn chủ động theo dõi tiến độ, phát hiện sai sót sớm và tránh tranh chấp với nhà thầu. Đây là bản đồ toàn cảnh từ bước thiết kế đến bàn giao.',
    category: 'kien-thuc',
    publishedAt: '2025-02-20',
    readTime: 9,
    author: 'ThS. Lê Thị Lan Anh',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    coverAlt: 'Không gian nội thất cao cấp mới hoàn thiện',
    tags: ['nội thất', 'quy trình', 'thi công', 'kinh nghiệm'],
    metaTitle: 'Quy Trình Thi Công Nội Thất Từ A Đến Z | HỌC GIA',
    metaDescription: 'Hướng dẫn toàn diện quy trình thi công nội thất từ giai đoạn thiết kế đến bàn giao. Những điều chủ nhà cần biết để giám sát hiệu quả.',
    content: [
      {
        type: 'p',
        text: 'Thi công nội thất là giai đoạn "biến bản vẽ thành hiện thực" — và đây cũng là giai đoạn dễ xảy ra mâu thuẫn nhất giữa chủ nhà và nhà thầu nếu không có sự chuẩn bị kỹ càng. Bài viết này sẽ giải thích từng bước trong quy trình thi công nội thất chuyên nghiệp để bạn biết mình đang ở đâu và cần kiểm tra gì.',
      },
      {
        type: 'h2',
        id: 'giai-doan-thiet-ke',
        text: 'Giai Đoạn 1: Thiết Kế và Phê Duyệt Bản Vẽ',
      },
      {
        type: 'p',
        text: 'Trước khi bất kỳ chiếc đinh nào được đóng, bạn và nhà thiết kế phải thống nhất hoàn toàn về hồ sơ thiết kế. Bộ hồ sơ đầy đủ bao gồm: bản vẽ mặt bằng bố trí nội thất, bản vẽ đứng từng phòng, bản vẽ chi tiết đồ mộc, và bảng mã vật liệu kèm tên thương hiệu và chủng loại cụ thể.',
      },
      {
        type: 'quote',
        text: 'Mỗi thay đổi ở bản vẽ tốn bạn 10 phút. Thay đổi đó tại công trường tốn bạn 10 ngày và 10 triệu đồng. Phê duyệt bản vẽ cẩn thận là khoản đầu tư sinh lời nhất trong cả dự án.',
        cite: 'ThS. Lê Thị Lan Anh — Trưởng bộ phận Thiết kế',
      },
      {
        type: 'h2',
        id: 'phan-cong-truoc-thi-cong',
        text: 'Giai Đoạn 2: Chuẩn Bị Mặt Bằng và Thi Công Điện Nước Âm',
      },
      {
        type: 'p',
        text: 'Đây là giai đoạn "làm việc không nhìn thấy" nhưng quan trọng nhất — vì sau khi tường được trát và sơn, mọi sai sót trong hệ thống điện và đường ống nước âm sẽ rất tốn kém để sửa. Hãy yêu cầu nhà thầu chụp ảnh toàn bộ hệ thống điện và ống nước trước khi trát tường để lưu hồ sơ.',
      },
      {
        type: 'ul',
        items: [
          'Đục rãnh tường lắp ống điện, ống nước âm',
          'Lắp đặt dây điện và ống nước theo bản vẽ kỹ thuật',
          'Kiểm tra và thử áp lực hệ thống nước trước khi trát',
          'Chụp ảnh tất cả vị trí ổ điện, công tắc, điểm đèn',
        ],
      },
      {
        type: 'h2',
        id: 'trat-son-hoan-thien',
        text: 'Giai Đoạn 3: Trát, Bả, Sơn và Ốp Lát',
      },
      {
        type: 'p',
        text: 'Chất lượng của giai đoạn này quyết định 80% thẩm mỹ của không gian nội thất. Độ phẳng của tường (kiểm tra bằng thước nhôm 2m), độ thẳng đứng của cạnh tường và góc 90° giữa tường và trần là những điểm phải kiểm tra nghiệm thu kỹ lưỡng.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
        alt: 'Thi công ốp gạch và hoàn thiện nội thất chuyên nghiệp',
        width: 800,
        height: 533,
        caption: 'Ốp gạch marble — kiểm tra lát phẳng bằng thước spirit level',
      },
      {
        type: 'h2',
        id: 'do-moc-lap-dat',
        text: 'Giai Đoạn 4: Lắp Đặt Đồ Mộc và Nội Thất Rời',
      },
      {
        type: 'p',
        text: 'Tủ bếp, tủ âm tường, giường và bàn làm việc là những hạng mục đồ mộc thường được sản xuất tại xưởng và lắp đặt tại công trường. Giai đoạn này đòi hỏi sự phối hợp chặt chẽ giữa đội thợ mộc và thợ điện để đảm bảo ổ điện, đèn tủ và đèn cạnh giường được lắp đúng vị trí.',
      },
      {
        type: 'h2',
        id: 'nghiem-thu-ban-giao',
        text: 'Giai Đoạn 5: Nghiệm Thu và Bàn Giao',
      },
      {
        type: 'p',
        text: 'Đây là bước nhiều chủ nhà thực hiện qua loa nhất — và thường hối hận sau đó. Hãy lập danh sách kiểm tra (punch list) chi tiết theo từng phòng: kiểm tra hoạt động của tất cả ổ điện, công tắc, đèn; kiểm tra các ngăn kéo và cánh cửa tủ; kiểm tra mức độ hoàn thiện của sơn và ốp lát.',
      },
      {
        type: 'ol',
        items: [
          'Lập punch list chi tiết theo từng phòng',
          'Chụp ảnh và ghi chú tất cả điểm cần sửa',
          'Yêu cầu nhà thầu hoàn thiện tất cả trước khi ký nghiệm thu',
          'Lưu giữ hồ sơ as-built bao gồm ảnh chụp hệ thống kỹ thuật',
        ],
      },
      {
        type: 'p',
        text: 'Một dự án nội thất được thi công bài bản sẽ mang lại không gian sống hoàn hảo trong nhiều năm mà không cần sửa chữa lớn. Đầu tư thời gian theo dõi và nghiệm thu đúng cách chính là cách bảo vệ khoản đầu tư của bạn.',
      },
    ],
  },
  {
    slug: 'vat-lieu-xay-dung-xanh-xu-huong-tat-yeu',
    title: 'Vật Liệu Xây Dựng Xanh: Xu Hướng Tất Yếu Của Ngành Xây Dựng Hiện Đại',
    sapo: 'Ngành xây dựng chiếm 38% lượng phát thải CO₂ toàn cầu. Vật liệu xây dựng xanh không chỉ là trào lưu — đây là đáp án không thể tránh khỏi cho bài toán phát triển bền vững.',
    category: 'kien-thuc',
    publishedAt: '2025-01-10',
    readTime: 8,
    author: 'KS. Phạm Quốc Bảo',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    coverAlt: 'Công trình xanh với vườn cây trên mái và mặt đứng',
    tags: ['vật liệu xanh', 'bền vững', 'LEED', 'môi trường'],
    metaTitle: 'Vật Liệu Xây Dựng Xanh — Xu Hướng Tất Yếu | HỌC GIA',
    metaDescription: 'Khám phá xu hướng vật liệu xây dựng xanh: bê tông tái chế, gỗ CLT, kính low-e, pin mặt trời BIPV — và tại sao đây là tương lai của ngành xây dựng.',
    content: [
      {
        type: 'p',
        text: 'Khi Việt Nam cam kết đạt mức phát thải ròng bằng 0 (Net Zero) vào năm 2050, ngành xây dựng — vốn chiếm 40% tổng tiêu thụ năng lượng và 38% lượng phát thải CO₂ toàn cầu — buộc phải chuyển đổi căn bản. Vật liệu xây dựng xanh đang trở thành tiêu chí bắt buộc, không còn là điểm cộng tuỳ chọn.',
      },
      {
        type: 'h2',
        id: 'be-tong-tai-che',
        text: 'Bê Tông Tái Chế và Bê Tông Cacbon Thấp',
      },
      {
        type: 'p',
        text: 'Bê tông thông thường chiếm khoảng 8% lượng khí thải CO₂ toàn cầu, chủ yếu từ sản xuất xi măng. Các giải pháp thay thế đang được triển khai gồm: bê tông sử dụng tro bay (fly ash) và xỉ lò cao (GGBFS) thay thế một phần xi măng — giảm đến 50% carbon trong mix thiết kế; bê tông tái chế từ phế liệu phá dỡ công trình cũ.',
      },
      {
        type: 'quote',
        text: 'Tương lai của bê tông là bê tông tái chế và bê tông cacbon thấp. Trong vòng 10 năm tới, không sử dụng vật liệu xanh sẽ là bất lợi cạnh tranh nghiêm trọng trên thị trường.',
        cite: 'KS. Phạm Quốc Bảo — Chuyên gia Vật liệu Xanh',
      },
      {
        type: 'h2',
        id: 'go-clt-va-bamboo',
        text: 'Gỗ Kỹ Thuật CLT và Bamboo Engineered',
      },
      {
        type: 'p',
        text: 'Cross-Laminated Timber (CLT) — gỗ ép chéo lớp — đang cách mạng hóa xây dựng tầng cao. Tòa nhà Brock Commons tại Vancouver (Canada) cao 18 tầng được xây hoàn toàn bằng CLT chỉ trong 70 ngày. CLT lưu trữ carbon trong suốt vòng đời công trình, có khả năng chịu lực tương đương bê tông cốt thép nhưng nhẹ hơn 5 lần.',
      },
      {
        type: 'p',
        text: 'Bamboo engineered (tre kỹ thuật) là vật liệu bản địa của Đông Nam Á với tốc độ tái sinh đáng kinh ngạc — trưởng thành chỉ trong 3–5 năm, nhanh hơn 20 lần so với gỗ tự nhiên. Độ bền kéo của tre kỹ thuật vượt thép nhẹ, và có thể áp dụng cho cả kết cấu lẫn hoàn thiện nội thất.',
      },
      {
        type: 'h2',
        id: 'kinh-thong-minh',
        text: 'Kính Thông Minh và Hệ Thống Vỏ Bao Che Năng Lượng',
      },
      {
        type: 'ul',
        items: [
          'Kính Low-E (low emissivity): phản xạ nhiệt hồng ngoại, giảm tải nhiệt 40–60%',
          'Kính điện sắc (electrochromic glass): tự động điều chỉnh độ trong suốt theo ánh sáng',
          'Mặt dựng BIPV (Building-Integrated Photovoltaics): pin mặt trời tích hợp vào vỏ bao che',
          'Bê tông cách nhiệt (insulating concrete form): giảm 40% nhu cầu sưởi/làm mát',
        ],
      },
      {
        type: 'h2',
        id: 'chung-nhan-xanh',
        text: 'Hệ Thống Chứng Nhận Xanh Tại Việt Nam',
      },
      {
        type: 'p',
        text: 'Việt Nam hiện có ba hệ thống chứng nhận công trình xanh được công nhận: LEED (Mỹ), EDGE (IFC/World Bank) và LOTUS (VGBC — hệ thống bản địa). Trong đó, EDGE đang là lựa chọn phổ biến nhất cho dự án quy mô vừa tại Việt Nam do chi phí chứng nhận thấp hơn và tiêu chí phù hợp với điều kiện khí hậu nhiệt đới.',
      },
      {
        type: 'img',
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
        alt: 'Công trình công nghiệp xanh với hệ thống năng lượng mặt trời mái',
        width: 800,
        height: 533,
        caption: 'Kho logistics đạt LEED Silver với 800 tấm pin năng lượng mặt trời',
      },
      {
        type: 'p',
        text: 'Đầu tư vào vật liệu và thiết kế xanh thường tốn thêm 5–15% chi phí xây dựng ban đầu, nhưng tiết kiệm 20–30% chi phí vận hành hàng năm. Thời gian hoàn vốn thường từ 5–8 năm — một khoản đầu tư cực kỳ hấp dẫn trong bối cảnh giá năng lượng ngày càng tăng.',
      },
    ],
  },

  /* ─── TIN CÔNG TY ─── */
  {
    slug: 'hoc-gia-dat-chung-nhan-iso-9001-2015',
    title: 'HỌC GIA Chính Thức Đạt Chứng Nhận ISO 9001:2015',
    sapo: 'Tháng 3/2025, Công ty TNHH Thương Mại và Dịch Vụ Xây Dựng HỌC GIA chính thức nhận chứng nhận hệ thống quản lý chất lượng ISO 9001:2015 từ tổ chức kiểm định Bureau Veritas.',
    category: 'tin-cong-ty',
    publishedAt: '2025-03-01',
    readTime: 4,
    author: 'Ban Truyền Thông HỌC GIA',
    coverImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    coverAlt: 'Lễ trao chứng nhận ISO 9001:2015 cho đội ngũ HỌC GIA',
    tags: ['ISO 9001', 'chứng nhận', 'chất lượng', 'tin tức'],
    metaTitle: 'HỌC GIA Đạt Chứng Nhận ISO 9001:2015 | Tin Công Ty',
    metaDescription: 'HỌC GIA chính thức nhận chứng nhận ISO 9001:2015 từ Bureau Veritas — cam kết hệ thống quản lý chất lượng đạt chuẩn quốc tế trong toàn bộ hoạt động.',
    content: [
      {
        type: 'p',
        text: 'Ngày 01 tháng 3 năm 2025, tại văn phòng HQ của HỌC GIA tại Quận 1, TP.HCM, đại diện Bureau Veritas Việt Nam đã trao chứng nhận ISO 9001:2015 cho Ban Giám đốc công ty sau một năm triển khai xây dựng và chuẩn hóa hệ thống quản lý chất lượng.',
      },
      {
        type: 'h2',
        id: 'y-nghia-cua-iso',
        text: 'Ý Nghĩa Của Chứng Nhận ISO 9001:2015',
      },
      {
        type: 'p',
        text: 'ISO 9001:2015 là tiêu chuẩn quốc tế được công nhận rộng rãi nhất về hệ thống quản lý chất lượng, với hơn 1 triệu tổ chức được chứng nhận tại 170 quốc gia. Chứng nhận này xác nhận rằng HỌC GIA có hệ thống quy trình đồng bộ, nhất quán và liên tục cải tiến trong mọi khâu từ tiếp nhận dự án đến bàn giao và bảo hành.',
      },
      {
        type: 'quote',
        text: 'ISO 9001 không phải là đích đến — đó là điểm bắt đầu của hành trình cải tiến liên tục. Chúng tôi cam kết rằng mỗi dự án được thực hiện đều được kiểm soát chặt chẽ hơn dự án trước.',
        cite: 'Ông Học Gia — Tổng Giám đốc Công ty',
      },
      {
        type: 'h2',
        id: 'qua-trinh-xay-dung',
        text: 'Quá Trình Xây Dựng Hệ Thống',
      },
      {
        type: 'p',
        text: 'Trong suốt năm 2024, HỌC GIA đã tiến hành chuẩn hóa toàn bộ quy trình nội bộ: từ quy trình đánh giá hồ sơ dự thầu, kiểm soát chất lượng vật liệu đầu vào, giám sát thi công tại công trường đến quy trình nghiệm thu và xử lý khiếu nại sau bàn giao. Toàn bộ được tài liệu hóa, tập huấn cho nhân viên và audit định kỳ.',
      },
      {
        type: 'h2',
        id: 'cam-ket-tuong-lai',
        text: 'Cam Kết Trong Tương Lai',
      },
      {
        type: 'p',
        text: 'Nối tiếp ISO 9001:2015, HỌC GIA đặt mục tiêu đạt chứng nhận ISO 45001:2018 (an toàn sức khỏe nghề nghiệp) và ISO 14001:2015 (quản lý môi trường) trước cuối năm 2026, hoàn thiện bộ ba chứng nhận HSE quốc tế — tiêu chuẩn mà các tập đoàn FDI hàng đầu yêu cầu đối với nhà thầu xây dựng.',
      },
    ],
  },
  {
    slug: 'hoc-gia-mo-rong-binh-duong-2025',
    title: 'HỌC GIA Mở Rộng Hoạt Động Tại Bình Dương Với Văn Phòng Đại Diện Mới',
    sapo: 'Đáp ứng nhu cầu ngày càng tăng từ các khu công nghiệp tại Bình Dương, HỌC GIA chính thức khai trương văn phòng đại diện khu vực tại Thành phố mới Bình Dương vào tháng 4/2025.',
    category: 'tin-cong-ty',
    publishedAt: '2025-04-05',
    readTime: 3,
    author: 'Ban Truyền Thông HỌC GIA',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    coverAlt: 'Văn phòng đại diện mới của HỌC GIA tại Bình Dương',
    tags: ['mở rộng', 'Bình Dương', 'văn phòng', 'tin tức'],
    metaTitle: 'HỌC GIA Mở Văn Phòng Đại Diện Tại Bình Dương | Tin Công Ty',
    metaDescription: 'HỌC GIA khai trương văn phòng đại diện mới tại Thành phố mới Bình Dương — phục vụ các dự án công nghiệp, dân dụng và hạ tầng tại khu vực.',
    content: [
      {
        type: 'p',
        text: 'Bình Dương hiện là tỉnh có nhiều khu công nghiệp nhất cả nước với hơn 30 KCN đang hoạt động, thu hút vốn FDI đứng thứ 2 Việt Nam sau TP.HCM. Sự bùng nổ của các dự án nhà máy, kho xưởng và nhà ở công nhân tạo ra nhu cầu xây dựng khổng lồ mà HỌC GIA quyết tâm phục vụ tốt hơn với sự hiện diện trực tiếp tại khu vực.',
      },
      {
        type: 'h2',
        id: 'vi-tri-va-nang-luc',
        text: 'Vị Trí và Năng Lực Của Văn Phòng Mới',
      },
      {
        type: 'p',
        text: 'Văn phòng đại diện HỌC GIA Bình Dương tọa lạc tại tầng 8, tòa nhà Becamex Tower, Thành phố mới Bình Dương. Với đội ngũ 15 kỹ sư và kiến trúc sư tại chỗ, văn phòng sẵn sàng đón tiếp chủ đầu tư tư vấn về các dự án xây dựng công nghiệp và dân dụng tại toàn tỉnh Bình Dương và các tỉnh lân cận.',
      },
      {
        type: 'h2',
        id: 'muc-tieu-chien-luoc',
        text: 'Mục Tiêu Chiến Lược',
      },
      {
        type: 'p',
        text: 'Trong 3 năm tới, HỌC GIA đặt mục tiêu thực hiện 15–20 dự án mỗi năm tại Bình Dương, tập trung vào phân khúc nhà máy FDI quy mô 5.000–30.000 m², khu dân cư công nhân và hạ tầng kỹ thuật khu công nghiệp. Đây là phần bổ sung chiến lược cho hoạt động hiện hữu tại TP.HCM, không phải sự dịch chuyển.',
      },
      {
        type: 'h2',
        id: 'lien-he',
        text: 'Thông Tin Liên Hệ Văn Phòng Bình Dương',
      },
      {
        type: 'ul',
        items: [
          'Địa chỉ: Tầng 8, Becamex Tower, Thành phố mới Bình Dương',
          'Điện thoại: (0274) 366 7890',
          'Email: binh-duong@hocgia.vn',
          'Giờ làm việc: Thứ Hai — Thứ Sáu, 8:00–17:30',
        ],
      },
    ],
  },

  /* ─── THÔNG CÁO BÁO CHÍ ─── */
  {
    slug: 'thong-cao-du-an-kho-logistics-leed-silver',
    title: 'Thông Cáo Báo Chí: HỌC GIA Bàn Giao Kho Logistics 32.000m² Đạt LEED Silver',
    sapo: 'Tháng 2/2025, HỌC GIA chính thức bàn giao dự án kho logistics đa năng cho Vina Logistics Group tại KCN Nhơn Trạch, Đồng Nai — công trình công nghiệp đầu tiên của công ty đạt chứng nhận LEED Silver.',
    category: 'thong-cao-bao-chi',
    publishedAt: '2025-02-28',
    readTime: 3,
    author: 'Ban Truyền Thông HỌC GIA',
    coverImage: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&q=80',
    coverAlt: 'Kho logistics 32.000m² đạt LEED Silver tại Đồng Nai',
    tags: ['LEED', 'kho logistics', 'Đồng Nai', 'thông cáo'],
    metaTitle: 'Thông Cáo: Bàn Giao Kho Logistics LEED Silver — Đồng Nai | HỌC GIA',
    metaDescription: 'HỌC GIA bàn giao kho logistics 32.000m² đạt LEED Silver tại KCN Nhơn Trạch, Đồng Nai cho Vina Logistics Group — tháng 2/2025.',
    content: [
      {
        type: 'p',
        text: 'TP. Hồ Chí Minh, ngày 28 tháng 02 năm 2025 — Công ty TNHH Thương Mại và Dịch Vụ Xây Dựng HỌC GIA công bố hoàn thành và bàn giao chính thức kho logistics đa năng 32.000 m² cho Vina Logistics Group tại Khu Công Nghiệp Nhơn Trạch 3, tỉnh Đồng Nai.',
      },
      {
        type: 'h2',
        id: 'thong-tin-du-an',
        text: 'Thông Tin Dự Án',
      },
      {
        type: 'ul',
        items: [
          'Chủ đầu tư: Vina Logistics Group',
          'Địa điểm: KCN Nhơn Trạch 3, Đồng Nai',
          'Tổng diện tích sàn: 32.000 m²',
          'Thời gian thi công: 18 tháng (T8/2023 — T2/2025)',
          'Chứng nhận: LEED Silver (U.S. Green Building Council)',
          'Tổng mức đầu tư: 245 tỷ đồng',
        ],
      },
      {
        type: 'h2',
        id: 'thanh-tuu-xanh',
        text: 'Các Thành Tựu Bền Vững',
      },
      {
        type: 'p',
        text: 'Công trình đạt LEED Silver với điểm số 55/110 điểm, tập trung vào 3 nhóm tiêu chí chính: tiết kiệm năng lượng (800 tấm pin mặt trời trên mái cung cấp 30% điện năng vận hành), sử dụng nước hiệu quả (hệ thống thu nước mưa tái sử dụng tưới cây giảm 40% tiêu thụ nước), và vật liệu tái chế (sử dụng thép tái chế đạt 25% tổng khối lượng thép).',
      },
      {
        type: 'h2',
        id: 'phat-bieu',
        text: 'Phát Biểu Của Đại Diện Hai Bên',
      },
      {
        type: 'quote',
        text: 'Đây là lần đầu tiên chúng tôi đầu tư vào công trình kho logistics đạt chuẩn LEED, và kết quả vượt kỳ vọng. HỌC GIA đã thực hiện đúng cam kết về tiến độ và chất lượng trong suốt 18 tháng — một sự hợp tác mà chúng tôi sẽ tiếp tục trong tương lai.',
        cite: 'Ông Nguyễn Trọng Tuấn — CEO Vina Logistics Group',
      },
      {
        type: 'p',
        text: 'Thông tin liên hệ báo chí: pr@hocgia.vn | (028) 3820 4567 ext. 201',
      },
    ],
  },
  {
    slug: '7-loi-thuong-gap-khi-lap-du-toan-xay-dung',
    title: '7 Lỗi Thường Gặp Khi Lập Dự Toán Xây Dựng Và Cách Tránh',
    sapo: 'Dự toán thiếu chính xác là nguyên nhân số một khiến ngân sách dự án vượt kiểm soát. Bài viết tổng hợp 7 sai lầm phổ biến và checklist phòng ngừa thực tế.',
    category: 'kien-thuc',
    publishedAt: '2025-05-12',
    readTime: 6,
    author: 'KS. Nguyễn Khắc Huy',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80',
    coverAlt: 'Kỹ sư và chủ đầu tư thảo luận dự toán công trình',
    tags: ['dự toán', 'chi phí', 'quản lý dự án'],
    metaTitle: '7 Lỗi Lập Dự Toán Xây Dựng Thường Gặp | HỌC GIA',
    metaDescription: 'Nhận diện 7 lỗi thường gặp khi lập dự toán xây dựng để kiểm soát ngân sách tốt hơn và tránh phát sinh không mong muốn.',
    content: [
      {
        type: 'p',
        text: 'Lập dự toán không chỉ là cộng đơn giá vật tư và nhân công. Đó là bài toán quản trị rủi ro, tiến độ và biến động thị trường. Nhiều dự án vượt ngân sách ngay từ quý đầu tiên vì sai ở bước bóc tách khối lượng.',
      },
      {
        type: 'h2',
        id: 'sai-khoi-luong',
        text: 'Sai sót khi bóc tách khối lượng',
      },
      {
        type: 'p',
        text: 'Việc bỏ sót hạng mục phụ trợ như biện pháp thi công tạm, vận chuyển nội bộ hay bảo vệ công trường khiến tổng chi phí thực tế lệch lớn so với kế hoạch ban đầu.',
      },
      {
        type: 'ul',
        items: [
          'Đối chiếu khối lượng giữa bản vẽ kiến trúc, kết cấu và MEP',
          'Tách riêng phần khối lượng dự phòng cho phát sinh hợp lý',
          'Cập nhật đơn giá theo từng đợt thay vì giữ một mức cố định',
        ],
      },
      {
        type: 'p',
        text: 'Thiết lập quy trình rà soát dự toán hai vòng độc lập là cách đơn giản nhưng hiệu quả để giảm rủi ro sai số.',
      },
    ],
  },
  {
    slug: 'hoc-gia-khoi-cong-cum-nha-xuong-long-an',
    title: 'HỌC GIA Khởi Công Cụm Nhà Xưởng 18.000m² Tại Long An',
    sapo: 'Dự án nhà xưởng mới tại Long An đánh dấu bước mở rộng năng lực thi công công nghiệp của HỌC GIA trong năm 2025.',
    category: 'tin-cong-ty',
    publishedAt: '2025-05-20',
    readTime: 4,
    author: 'Ban Truyền Thông HỌC GIA',
    coverImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    coverAlt: 'Lễ khởi công cụm nhà xưởng tại Long An',
    tags: ['khởi công', 'Long An', 'nhà xưởng'],
    metaTitle: 'HỌC GIA Khởi Công Cụm Nhà Xưởng Long An | Tin Công Ty',
    metaDescription: 'HỌC GIA chính thức khởi công cụm nhà xưởng 18.000m² tại Long An, dự kiến hoàn thành trong 11 tháng.',
    content: [
      {
        type: 'p',
        text: 'Sáng ngày 20/05/2025, HỌC GIA tổ chức lễ khởi công cụm nhà xưởng 18.000m² tại KCN Tân Đô, Long An. Dự án gồm 3 khối xưởng sản xuất, khu văn phòng điều hành và hạ tầng kỹ thuật đồng bộ.',
      },
      {
        type: 'h2',
        id: 'muc-tieu-du-an',
        text: 'Mục tiêu và tiến độ',
      },
      {
        type: 'p',
        text: 'Dự án được lập kế hoạch thi công trong 11 tháng, áp dụng hệ thống kiểm soát tiến độ theo tuần và báo cáo hai chiều giữa ban điều hành dự án và chủ đầu tư.',
      },
      {
        type: 'quote',
        text: 'Đây là dự án mở đầu cho chuỗi công trình công nghiệp mới mà HỌC GIA triển khai tại Long An và khu vực phía Nam.',
        cite: 'Ban Giám đốc HỌC GIA',
      },
    ],
  },
  {
    slug: 'thong-cao-hop-tac-chien-luoc-vat-lieu-xanh',
    title: 'Thông Cáo: HỌC GIA Ký Kết Hợp Tác Chiến Lược Vật Liệu Xanh',
    sapo: 'HỌC GIA công bố hợp tác chiến lược với đối tác cung ứng vật liệu xanh nhằm tăng tỷ lệ vật liệu bền vững trong các dự án dân dụng và công nghiệp.',
    category: 'thong-cao-bao-chi',
    publishedAt: '2025-05-28',
    readTime: 3,
    author: 'Ban Truyền Thông HỌC GIA',
    coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    coverAlt: 'Lễ ký kết hợp tác chiến lược vật liệu xanh',
    tags: ['thông cáo', 'vật liệu xanh', 'hợp tác'],
    metaTitle: 'Thông Cáo Hợp Tác Vật Liệu Xanh | HỌC GIA',
    metaDescription: 'HỌC GIA ký hợp tác chiến lược vật liệu xanh, thúc đẩy mục tiêu xây dựng bền vững và giảm phát thải cho dự án.',
    content: [
      {
        type: 'p',
        text: 'TP.HCM, ngày 28/05/2025 - HỌC GIA công bố biên bản hợp tác chiến lược với GreenBuild Solutions trong việc cung ứng các dòng vật liệu phát thải thấp cho dự án xây dựng mới.',
      },
      {
        type: 'h2',
        id: 'pham-vi-hop-tac',
        text: 'Phạm vi hợp tác',
      },
      {
        type: 'ul',
        items: [
          'Ưu tiên sử dụng vật liệu có chứng nhận môi trường quốc tế',
          'Đồng phát triển bộ tiêu chuẩn vật liệu nội bộ cho từng loại dự án',
          'Đào tạo kỹ sư và chỉ huy trưởng về quy trình nghiệm thu vật liệu xanh',
        ],
      },
      {
        type: 'p',
        text: 'Chương trình hợp tác được kỳ vọng giúp giảm 12-18% phát thải vật liệu trong các dự án đủ điều kiện áp dụng từ quý III/2025.',
      },
    ],
  },
  {
    slug: 'giai-phap-thong-gio-tu-nhien-cho-nha-pho',
    title: 'Giải Pháp Thông Gió Tự Nhiên Cho Nhà Phố Nhiệt Đới',
    sapo: 'Thông gió tự nhiên đúng cách giúp giảm tải điều hòa, cải thiện chất lượng không khí và tiết kiệm chi phí vận hành lâu dài cho nhà phố đô thị.',
    category: 'kien-thuc',
    publishedAt: '2025-06-03',
    readTime: 5,
    author: 'KTS. Trần Minh Khoa',
    coverImage: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80',
    coverAlt: 'Nhà phố hiện đại với giải pháp thông gió tự nhiên',
    tags: ['nhà phố', 'thông gió', 'kiến trúc nhiệt đới'],
    metaTitle: 'Giải Pháp Thông Gió Tự Nhiên Cho Nhà Phố | HỌC GIA',
    metaDescription: 'Các giải pháp thông gió tự nhiên thực tế cho nhà phố nhiệt đới giúp tiết kiệm điện và nâng cao tiện nghi.',
    content: [
      {
        type: 'p',
        text: 'Trong điều kiện khí hậu nóng ẩm của Việt Nam, thông gió tự nhiên là giải pháp quan trọng để giảm nhiệt tích tụ và tăng sự thoải mái trong không gian sống.',
      },
      {
        type: 'h2',
        id: 'gieng-troi-va-mat-dung',
        text: 'Giếng trời và mặt đứng hai lớp',
      },
      {
        type: 'p',
        text: 'Giếng trời kết hợp lam chắn nắng giúp tăng đối lưu theo phương đứng, trong khi mặt đứng hai lớp tạo vùng đệm nhiệt, giảm bức xạ trực tiếp vào không gian chính.',
      },
      {
        type: 'ol',
        items: [
          'Tổ chức cửa lấy gió thấp và cửa thoát gió cao',
          'Ưu tiên lam che hướng Tây để giảm nhiệt buổi chiều',
          'Kết hợp cây xanh nội thất để điều hòa vi khí hậu',
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: PostCategory, limit = 3): Post[] {
  return POSTS.filter((p) => p.slug !== slug && p.category === category).slice(0, limit);
}

export function extractTOC(blocks: Block[]): TOCItem[] {
  return blocks
    .filter((b): b is Extract<Block, { type: 'h2' | 'h3' }> => b.type === 'h2' || b.type === 'h3')
    .map((b) => ({ id: b.id, text: b.text, level: b.type }));
}
