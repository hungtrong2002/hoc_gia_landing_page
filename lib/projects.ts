export type ProjectStatus = 'da-hoan-thanh' | 'dang-thi-cong';
export type ProjectType =
  | 'cong-nghiep'
  | 'dan-dung'
  | 'cai-tao'
  | 'ha-tang'
  | 'noi-that';

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  location: string;
  area: string;
  duration: string;
  completedYear: string;
  status: ProjectStatus;
  type: ProjectType;
  coverImage: string;
  coverAlt: string;
  sapo: string;
  description: string;
  highlights: string[];
  gallery: { src: string; alt: string }[];
  metaTitle: string;
  metaDescription: string;
}

/* ─── Shared tiny blur placeholder (sage #d8e4ce encoded SVG) ─── */
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNkOGU0Y2UiLz48L3N2Zz4=';

export const PROJECTS: Project[] = [
  /* ─── CÔNG NGHIỆP ─── */
  {
    slug: 'nha-may-precision-binh-duong',
    title: 'Nhà Máy Precision Components — Bình Dương',
    shortTitle: 'Nhà Máy Precision Components',
    client: 'Precision Components Vietnam Co., Ltd',
    location: 'KCN VSIP II, Bình Dương',
    area: '18.500 m²',
    duration: '14 tháng',
    completedYear: '2023',
    status: 'da-hoan-thanh',
    type: 'cong-nghiep',
    coverImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    coverAlt: 'Nhà máy Precision Components tại KCN VSIP II Bình Dương',
    sapo: 'Tổng thầu thi công nhà máy sản xuất linh kiện chính xác theo tiêu chuẩn ISO 9001 — bàn giao đúng tiến độ 14 tháng.',
    description:
      'Dự án nhà máy Precision Components Vietnam là một trong những công trình công nghiệp tiêu biểu nhất của HỌC GIA trong năm 2023. Với tổng diện tích 18.500 m², nhà máy được thiết kế theo tiêu chuẩn quốc tế với hệ thống làm sạch phòng ISO Class 7, sàn epoxy chống tĩnh điện và hệ thống điện dự phòng công suất lớn.',
    highlights: [
      'Phòng sạch ISO Class 7 diện tích 2.400 m²',
      'Sàn epoxy chống tĩnh điện ESD toàn bộ khu vực sản xuất',
      'Hệ thống UPS & máy phát điện dự phòng 1.500 kVA',
      'Hoàn thành trước tiến độ 3 tuần',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85', alt: 'Toàn cảnh nhà máy từ trên cao' },
      { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=85', alt: 'Khu vực sản xuất chính xác' },
      { src: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&q=85', alt: 'Hệ thống điện và kỹ thuật' },
      { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=85', alt: 'Kho chứa hàng và logistics' },
      { src: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&q=85', alt: 'Hệ thống HVAC công nghiệp' },
      { src: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=85', alt: 'Khu vực văn phòng nhà máy' },
    ],
    metaTitle: 'Nhà Máy Precision Components — Bình Dương | HỌC GIA',
    metaDescription: 'Tổng thầu thi công nhà máy 18.500m² theo tiêu chuẩn ISO tại KCN VSIP II Bình Dương. Phòng sạch ISO Class 7, sàn ESD, bàn giao đúng tiến độ.',
  },
  {
    slug: 'kho-logistics-dong-nai',
    title: 'Kho Logistics Đa Năng — Đồng Nai',
    shortTitle: 'Kho Logistics Đa Năng',
    client: 'Vina Logistics Group',
    location: 'KCN Nhơn Trạch, Đồng Nai',
    area: '32.000 m²',
    duration: '18 tháng',
    completedYear: '2024',
    status: 'da-hoan-thanh',
    type: 'cong-nghiep',
    coverImage: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=900&q=80',
    coverAlt: 'Kho logistics đa năng KCN Nhơn Trạch Đồng Nai',
    sapo: 'Kho hàng 32.000 m² đạt chuẩn LEED Silver với hệ thống tự động hóa và năng lượng tái tạo.',
    description:
      'Kho logistics đa năng Vina Logistics Group là công trình đầu tiên của HỌC GIA đạt chứng nhận LEED Silver tại Đồng Nai. Hệ thống mái lắp đặt 800 tấm pin năng lượng mặt trời cung cấp 30% nhu cầu điện vận hành.',
    highlights: [
      'Chứng nhận LEED Silver — công trình công nghiệp xanh',
      '800 tấm pin năng lượng mặt trời trên mái',
      'Hệ thống sprinkler ESFR bảo vệ kho hàng cao',
      'Sức tải sàn 5 tấn/m²',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=1200&q=85', alt: 'Toàn cảnh kho logistics' },
      { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85', alt: 'Nội thất kho hàng cao tầng' },
      { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85', alt: 'Hệ thống kệ racking thông minh' },
      { src: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=85', alt: 'Cổng tiếp nhận hàng hóa' },
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85', alt: 'Hệ thống năng lượng mặt trời trên mái' },
    ],
    metaTitle: 'Kho Logistics 32.000m² — Đồng Nai | HỌC GIA',
    metaDescription: 'Tổng thầu xây dựng kho logistics 32.000m² đạt LEED Silver tại KCN Nhơn Trạch. Năng lượng tái tạo, kết cấu tiền chế, bàn giao 18 tháng.',
  },
  {
    slug: 'xuong-san-xuat-long-an',
    title: 'Xưởng Sản Xuất Thủy Sản — Long An',
    shortTitle: 'Xưởng Sản Xuất Thủy Sản',
    client: 'An Khang Seafood Export',
    location: 'Cụm CN Thạnh Đức, Long An',
    area: '8.200 m²',
    duration: '10 tháng',
    completedYear: '2025',
    status: 'dang-thi-cong',
    type: 'cong-nghiep',
    coverImage: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80',
    coverAlt: 'Xưởng chế biến thủy sản Long An đang thi công',
    sapo: 'Xưởng chế biến thủy sản xuất khẩu đạt tiêu chuẩn HACCP với phòng đông lạnh âm 40°C và hệ thống xử lý nước thải hiện đại.',
    description:
      'Dự án xưởng sản xuất thủy sản xuất khẩu An Khang Seafood đang trong giai đoạn hoàn thiện. Công trình đòi hỏi kỹ thuật cao với hệ thống cách nhiệt phòng lạnh -40°C, sàn vệ sinh thực phẩm và trạm xử lý nước thải 500 m³/ngày.',
    highlights: [
      'Phòng đông lạnh -40°C diện tích 1.800 m²',
      'Sàn vệ sinh thực phẩm không đọng nước',
      'Trạm XLNT 500 m³/ngày đạt cột A QCVN 40',
      'Tiến độ đạt 78% — dự kiến bàn giao Q3/2025',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=85', alt: 'Công trình đang thi công phần thô' },
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85', alt: 'Kết cấu thép tiền chế' },
      { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85', alt: 'Hệ thống đường ống công nghệ' },
    ],
    metaTitle: 'Xưởng Sản Xuất Thủy Sản — Long An | HỌC GIA',
    metaDescription: 'Thi công xưởng chế biến thủy sản 8.200m² đạt HACCP tại Long An. Phòng lạnh -40°C, XLNT 500m³/ngày, bàn giao Q3/2025.',
  },

  /* ─── DÂN DỤNG ─── */
  {
    slug: 'chung-cu-green-valley-quan-9',
    title: 'Chung Cư Green Valley — TP. Thủ Đức',
    shortTitle: 'Chung Cư Green Valley',
    client: 'Nam Long Investment Corp',
    location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
    area: '24.600 m²',
    duration: '22 tháng',
    completedYear: '2023',
    status: 'da-hoan-thanh',
    type: 'dan-dung',
    coverImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
    coverAlt: 'Chung cư Green Valley TP Thủ Đức cao tầng',
    sapo: 'Tổ hợp chung cư 2 block × 20 tầng với 480 căn hộ — tiêu chuẩn công trình xanh EDGE.',
    description:
      'Green Valley là dự án nhà ở thương mại quy mô lớn nhất mà HỌC GIA đảm nhận tại TP.HCM. Hai block 20 tầng với tổng 480 căn hộ, đạt chứng nhận công trình xanh EDGE với mức tiết kiệm năng lượng 30% so với tiêu chuẩn thông thường.',
    highlights: [
      'Chứng nhận EDGE — tiết kiệm năng lượng 30%',
      '480 căn hộ từ 1PN đến 3PN',
      'Hệ thống thu nước mưa tái sử dụng tưới cây',
      'Bàn giao đúng hạn cam kết với chủ đầu tư',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85', alt: 'Tổng quan 2 block chung cư từ xa' },
      { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85', alt: 'Khu vực sảnh và tiện ích tầng trệt' },
      { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1200&q=85', alt: 'Hồ bơi và khu thể thao ngoài trời' },
      { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=85', alt: 'Hành lang và thang bộ tiêu chuẩn PCCC' },
      { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85', alt: 'View từ căn hộ tầng cao' },
      { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85', alt: 'Mặt ngoài tòa nhà hoàn thiện' },
    ],
    metaTitle: 'Chung Cư Green Valley 480 Căn Hộ — TP. Thủ Đức | HỌC GIA',
    metaDescription: 'Tổng thầu 2 block chung cư 20 tầng, 480 căn hộ đạt EDGE tại TP.Thủ Đức. Tiết kiệm năng lượng 30%, bàn giao đúng hạn.',
  },
  {
    slug: 'biet-thu-royal-garden-binh-chanh',
    title: 'Biệt Thự Royal Garden — Bình Chánh',
    shortTitle: 'Biệt Thự Royal Garden',
    client: 'Khách hàng cá nhân (bảo mật)',
    location: 'Khu đô thị Royal Garden, Bình Chánh',
    area: '1.200 m²',
    duration: '16 tháng',
    completedYear: '2024',
    status: 'da-hoan-thanh',
    type: 'dan-dung',
    coverImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=80',
    coverAlt: 'Biệt thự Royal Garden Bình Chánh phong cách hiện đại',
    sapo: 'Biệt thự song lập 3 tầng phong cách hiện đại — kết hợp hài hòa giữa kiến trúc đương đại và cảnh quan xanh nhiệt đới.',
    description:
      'Biệt thự Royal Garden là công trình tiêu biểu cho phân khúc nhà ở cao cấp của HỌC GIA. Thiết kế mở tối đa ánh sáng tự nhiên với hệ thống cửa kính lớn, vườn cây xanh bao quanh và hồ bơi riêng.',
    highlights: [
      'Kiến trúc hiện đại tối đa ánh sáng tự nhiên',
      'Hồ bơi riêng 12m × 4m với hệ thống lọc nước muối',
      'Hệ thống smarthome tích hợp toàn bộ',
      'Vườn cảnh quan tropical garden 350 m²',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85', alt: 'Mặt tiền biệt thự nhìn từ sân vườn' },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85', alt: 'Hồ bơi ngoài trời nhìn từ ban công' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', alt: 'Cảnh quan vườn nhiệt đới' },
      { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85', alt: 'Phòng khách tầng 1 view vườn' },
      { src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85', alt: 'Cầu thang và không gian cao thông tầng' },
    ],
    metaTitle: 'Biệt Thự Royal Garden — Bình Chánh, TP.HCM | HỌC GIA',
    metaDescription: 'Thi công biệt thự 1.200m² phong cách hiện đại tại Bình Chánh. Hồ bơi riêng, smarthome, vườn tropical, bàn giao 16 tháng.',
  },
  {
    slug: 'toa-nha-van-phong-delta-quan-1',
    title: 'Tòa Nhà Văn Phòng Delta — Quận 1',
    shortTitle: 'Văn Phòng Delta Tower',
    client: 'Delta Property Group',
    location: 'Đường Lê Duẩn, Quận 1, TP. Hồ Chí Minh',
    area: '9.800 m²',
    duration: '20 tháng',
    completedYear: '2025',
    status: 'dang-thi-cong',
    type: 'dan-dung',
    coverImage: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=80',
    coverAlt: 'Tòa nhà văn phòng Delta Quận 1 đang thi công',
    sapo: 'Tòa văn phòng hạng A 15 tầng tại trung tâm Quận 1 — hệ thống mặt dựng nhôm kính double-skin tiết kiệm năng lượng.',
    description:
      'Delta Tower là dự án văn phòng hạng A đầu tiên của HỌC GIA tại trung tâm CBD Quận 1. Hệ thống mặt dựng nhôm kính double-skin giảm tải nhiệt 40%, kết hợp sàn điện truy cập (access floor) linh hoạt cho mọi loại hình văn phòng.',
    highlights: [
      'Mặt dựng double-skin giảm tải nhiệt 40%',
      'Sàn điện access floor toàn bộ tầng văn phòng',
      '4 thang máy tốc độ cao Otis 6m/s',
      'Tiến độ đạt 55% — dự kiến bàn giao Q1/2026',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=85', alt: 'Phối cảnh mặt tiền Delta Tower' },
      { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85', alt: 'Thi công lắp mặt dựng kính' },
      { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85', alt: 'Công trường xây dựng cao tầng' },
    ],
    metaTitle: 'Tòa Văn Phòng Delta 15 Tầng — Quận 1 | HỌC GIA',
    metaDescription: 'Tổng thầu tòa văn phòng hạng A 15 tầng 9.800m² tại Quận 1. Mặt dựng double-skin, access floor, bàn giao Q1/2026.',
  },

  /* ─── CẢI TẠO ─── */
  {
    slug: 'cai-tao-khach-san-palm-vung-tau',
    title: 'Cải Tạo Khách Sạn Palm — Vũng Tàu',
    shortTitle: 'Khách Sạn Palm Vũng Tàu',
    client: 'Palm Hospitality Group',
    location: 'Đường Trần Phú, Vũng Tàu',
    area: '5.600 m²',
    duration: '8 tháng',
    completedYear: '2024',
    status: 'da-hoan-thanh',
    type: 'cai-tao',
    coverImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80',
    coverAlt: 'Khách sạn Palm Vũng Tàu sau cải tạo mặt tiền hiện đại',
    sapo: 'Cải tạo toàn diện khách sạn 4 sao 8 tầng — nâng cấp từ 2 sao lên 4 sao trong 8 tháng không ngừng hoạt động.',
    description:
      'Dự án cải tạo Palm Hotel là thách thức kỹ thuật cao nhất: nâng cấp toàn diện một khách sạn đang vận hành mà không đóng cửa. HỌC GIA triển khai theo từng block phòng, đảm bảo luôn có 60% phòng vận hành bình thường trong suốt quá trình thi công.',
    highlights: [
      'Thi công phân luồng — 60% phòng luôn hoạt động',
      'Mặt tiền mới hoàn toàn với vật liệu GRC và kính low-E',
      'Lobby 5 sao với đá marble nhập khẩu và ánh sáng nghệ thuật',
      'Nâng cấp hệ thống điện, nước, điều hòa toàn bộ',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=85', alt: 'Mặt tiền khách sạn sau cải tạo về đêm' },
      { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85', alt: 'Hồ bơi tầng thượng sau nâng cấp' },
      { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', alt: 'Lobby mới với đá marble và ánh sáng nghệ thuật' },
      { src: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85', alt: 'Phòng deluxe sau nâng cấp nội thất' },
      { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85', alt: 'Nhà hàng tầng 8 view biển' },
      { src: 'https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?w=1200&q=85', alt: 'Hành lang tầng khách đã hoàn thiện' },
    ],
    metaTitle: 'Cải Tạo Khách Sạn Palm 4 Sao — Vũng Tàu | HỌC GIA',
    metaDescription: 'Cải tạo khách sạn 2→4 sao 5.600m² tại Vũng Tàu trong 8 tháng không ngừng hoạt động. Mặt tiền GRC, lobby marble, HTKT mới hoàn toàn.',
  },
  {
    slug: 'nang-cap-truong-hoc-hoa-binh',
    title: 'Nâng Cấp Trường THPT Hòa Bình — Gò Vấp',
    shortTitle: 'Trường THPT Hòa Bình',
    client: 'UBND Quận Gò Vấp',
    location: 'Quận Gò Vấp, TP. Hồ Chí Minh',
    area: '3.800 m²',
    duration: '3 tháng',
    completedYear: '2024',
    status: 'da-hoan-thanh',
    type: 'cai-tao',
    coverImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80',
    coverAlt: 'Trường THPT Hòa Bình sau nâng cấp cơ sở vật chất',
    sapo: 'Nâng cấp toàn diện cơ sở vật chất trường học trong 3 tháng hè — 32 phòng học mới đáp ứng tiêu chuẩn Bộ GD&ĐT.',
    description:
      'Dự án nâng cấp Trường THPT Hòa Bình được hoàn thành trong đúng 90 ngày hè, đảm bảo trường kịp đón học sinh vào năm học mới. Toàn bộ 32 phòng học được lắp điều hòa, bàn ghế mới, hệ thống âm thanh và máy chiếu tích hợp.',
    highlights: [
      '32 phòng học lắp điều hòa và thiết bị dạy học hiện đại',
      'Hoàn thành đúng 90 ngày — kịp năm học mới',
      'Sân trường và hệ thống thoát nước cải tạo toàn bộ',
      'Công trình đạt tiêu chuẩn trường học chuẩn quốc gia',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85', alt: 'Mặt tiền trường sau cải tạo' },
      { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80', alt: 'Phòng học mới với thiết bị hiện đại' },
      { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85', alt: 'Sân trường và khu vui chơi mới' },
      { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=85', alt: 'Thư viện và phòng chức năng nâng cấp' },
    ],
    metaTitle: 'Nâng Cấp Trường THPT Hòa Bình — Gò Vấp | HỌC GIA',
    metaDescription: 'Cải tạo trường học 3.800m² hoàn thành 90 ngày hè. 32 phòng học điều hòa, thiết bị hiện đại, đạt chuẩn trường quốc gia.',
  },

  /* ─── HẠ TẦNG ─── */
  {
    slug: 'ha-tang-khu-do-thi-the-sun',
    title: 'Hạ Tầng Kỹ Thuật KĐT The Sun — Bình Dương',
    shortTitle: 'KĐT The Sun Bình Dương',
    client: 'Sun Investment Corporation',
    location: 'Thành phố mới Bình Dương',
    area: '85 ha',
    duration: '24 tháng',
    completedYear: '2023',
    status: 'da-hoan-thanh',
    type: 'ha-tang',
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    coverAlt: 'Hạ tầng kỹ thuật khu đô thị The Sun nhìn từ trên cao',
    sapo: 'Hệ thống hạ tầng kỹ thuật đồng bộ cho khu đô thị 85 ha — đường nội bộ, thoát nước, điện ngầm và cây xanh hoàn chỉnh.',
    description:
      'Dự án hạ tầng KĐT The Sun là công trình quy mô nhất trong lĩnh vực hạ tầng kỹ thuật của HỌC GIA. 18km đường nội bộ, 42km đường ống thoát nước và 28km cáp điện ngầm được thi công đồng bộ trong 24 tháng.',
    highlights: [
      '18km đường nội bộ bê tông nhựa nóng',
      '42km đường ống thoát nước hộp BTCT',
      '28km cáp điện và viễn thông ngầm',
      '15km hệ thống chiếu sáng công cộng LED',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', alt: 'Đường trục chính khu đô thị từ trên cao' },
      { src: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=85', alt: 'Thi công đường nội bộ và vỉa hè' },
      { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85', alt: 'Hệ thống cống thoát nước lắp đặt' },
      { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85', alt: 'Trạm điện phân phối khu đô thị' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=75', alt: 'Công viên và mảng xanh đã hoàn thiện' },
    ],
    metaTitle: 'Hạ Tầng KĐT The Sun 85ha — Bình Dương | HỌC GIA',
    metaDescription: 'Thi công hạ tầng kỹ thuật KĐT 85ha: 18km đường, 42km thoát nước, 28km điện ngầm tại Bình Dương. Bàn giao đồng bộ 24 tháng.',
  },
  {
    slug: 'he-thong-thoat-nuoc-phu-my-hung',
    title: 'Nâng Cấp Thoát Nước Phú Mỹ Hưng — TP.HCM',
    shortTitle: 'Thoát Nước Phú Mỹ Hưng',
    client: 'Công ty Phú Mỹ Hưng',
    location: 'Quận 7, TP. Hồ Chí Minh',
    area: '12 ha',
    duration: '6 tháng',
    completedYear: '2025',
    status: 'dang-thi-cong',
    type: 'ha-tang',
    coverImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80',
    coverAlt: 'Thi công nâng cấp hệ thống thoát nước Phú Mỹ Hưng',
    sapo: 'Nâng cấp hệ thống thoát nước để chống ngập cho 12 ha đô thị — áp dụng công nghệ cống hộp lắp ghép đẩy nhanh tiến độ.',
    description:
      'Dự án nâng cấp thoát nước Phú Mỹ Hưng giai đoạn 2 đang triển khai với công nghệ cống hộp bê tông đúc sẵn lắp ghép nhanh, giảm thiểu thời gian thi công trên mặt đường và ảnh hưởng đến lưu thông.',
    highlights: [
      'Cống hộp BTCT đúc sẵn D1200 — D2400mm',
      'Công nghệ lắp ghép nhanh giảm 40% thời gian thi công',
      'Thi công ban đêm giảm tắc nghẽn giao thông',
      'Tiến độ đạt 60% — dự kiến bàn giao T9/2025',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85', alt: 'Thi công lắp cống hộp bê tông đúc sẵn' },
      { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85', alt: 'Đào hào kỹ thuật và đặt ống' },
      { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85', alt: 'Máy móc thi công hạ tầng ngầm' },
    ],
    metaTitle: 'Nâng Cấp Thoát Nước Phú Mỹ Hưng 12ha | HỌC GIA',
    metaDescription: 'Nâng cấp hệ thống thoát nước chống ngập 12ha tại Phú Mỹ Hưng Q7. Cống hộp đúc sẵn lắp ghép nhanh, bàn giao T9/2025.',
  },

  /* ─── NỘI THẤT ─── */
  {
    slug: 'noi-that-penthouse-vinhomes-grand-park',
    title: 'Nội Thất Penthouse Vinhomes Grand Park',
    shortTitle: 'Penthouse Vinhomes Grand Park',
    client: 'Khách hàng cá nhân (bảo mật)',
    location: 'Vinhomes Grand Park, TP. Thủ Đức',
    area: '320 m²',
    duration: '5 tháng',
    completedYear: '2024',
    status: 'da-hoan-thanh',
    type: 'noi-that',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
    coverAlt: 'Phòng khách penthouse Vinhomes phong cách japandi sang trọng',
    sapo: 'Thiết kế nội thất penthouse 320 m² phong cách Japandi — kết hợp tối giản Nhật Bản và ấm cúng Scandinavia.',
    description:
      'Penthouse Vinhomes Grand Park là một trong những dự án nội thất cao cấp nhất mà HỌC GIA thực hiện. Phong cách Japandi với gỗ walnut tự nhiên, đá Calacatta, kim loại đồng PVD và vải len Merino nhập khẩu từ Đan Mạch.',
    highlights: [
      'Gỗ walnut American tự nhiên theo vân liên tục',
      'Đá Calacatta Paonazzo nhập khẩu từ Italy',
      'Kim loại đồng mờ PVD trên tất cả phụ kiện',
      'Hệ thống smarthome KNX tích hợp chiếu sáng và rèm',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85', alt: 'Phòng khách tối giản với ánh sáng tự nhiên' },
      { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=85', alt: 'Bếp mở với đảo bếp đá Calacatta' },
      { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85', alt: 'Phòng ngủ master với gỗ walnut' },
      { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85', alt: 'Phòng tắm đá marble và đồng mờ' },
      { src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&q=85', alt: 'Góc đọc sách với cửa sổ toàn cảnh' },
      { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85', alt: 'Ban công và view toàn cảnh thành phố' },
    ],
    metaTitle: 'Nội Thất Penthouse 320m² Phong Cách Japandi | HỌC GIA',
    metaDescription: 'Thi công nội thất penthouse 320m² phong cách Japandi tại Vinhomes. Gỗ walnut, đá Calacatta Italy, đồng PVD, smarthome KNX.',
  },
  {
    slug: 'noi-that-van-phong-fpt-software',
    title: 'Nội Thất Văn Phòng FPT Software — Quận 9',
    shortTitle: 'Văn Phòng FPT Software',
    client: 'FPT Software Ho Chi Minh City',
    location: 'Khu công nghệ cao, TP. Thủ Đức',
    area: '4.500 m²',
    duration: '4 tháng',
    completedYear: '2023',
    status: 'da-hoan-thanh',
    type: 'noi-that',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    coverAlt: 'Không gian làm việc sáng tạo FPT Software mở và hiện đại',
    sapo: 'Không gian làm việc linh hoạt 4.500 m² cho 800 kỹ sư phần mềm — activity-based working kết hợp biophilic design.',
    description:
      'Dự án nội thất FPT Software là một ví dụ điển hình về thiết kế không gian làm việc thế hệ mới. Activity-based working với 6 zone làm việc khác nhau, biophilic design với tường xanh sống và ánh sáng tự nhiên tối đa.',
    highlights: [
      '6 zone làm việc activity-based: focus, collab, social, lounge, training, café',
      'Tường xanh sống 180m² với hệ thống tưới tự động',
      'Âm thanh phòng họp đạt tiêu chuẩn NC-35',
      'Hoàn thành 4 tháng — bàn giao trước Tết 2024',
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85', alt: 'Không gian làm việc mở với biophilic design' },
      { src: 'https://images.unsplash.com/photo-1497366754035-f200968a7a3d?w=1200&q=85', alt: 'Phòng họp kính với view mở' },
      { src: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85', alt: 'Khu vực café lounge và breakout' },
      { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85', alt: 'Zone collaboration với bàn ghế linh hoạt' },
      { src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=85', alt: 'Tường xanh sống và góc focus work' },
      { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=85', alt: 'Phòng training với âm học đạt chuẩn' },
    ],
    metaTitle: 'Nội Thất Văn Phòng FPT Software 4.500m² — TP. Thủ Đức | HỌC GIA',
    metaDescription: 'Thi công nội thất văn phòng activity-based 4.500m² cho FPT Software. Biophilic design, tường xanh sống, 6 zone linh hoạt, bàn giao 4 tháng.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const TYPE_OPTIONS = [
  { value: '', label: 'Tất cả' },
  { value: 'cong-nghiep', label: 'Công nghiệp' },
  { value: 'dan-dung', label: 'Dân dụng' },
  { value: 'cai-tao', label: 'Cải tạo' },
  { value: 'ha-tang', label: 'Hạ tầng' },
  { value: 'noi-that', label: 'Nội thất' },
];

export const STATUS_OPTIONS = [
  { value: '', label: 'Tất cả trạng thái' },
  { value: 'da-hoan-thanh', label: 'Đã hoàn thành' },
  { value: 'dang-thi-cong', label: 'Đang thi công' },
];
