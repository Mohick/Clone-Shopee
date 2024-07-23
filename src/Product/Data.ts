

interface Product {
    name: string;
    link: string;
}

const DataProduct: Product[] = [
    {
        name: "combo 2 túi sữa tăng cân muscle mass gainer".toLowerCase(),
        link: 'https://json-be-shopee.onrender.com/api__products'
    },
    {
        name: "máy hút bụi mini godwell không dây lực hút 6000mpa làm sạch bàn phím, ô tô,nhỏ gọn pin sạc tiện lợi".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/may_hut_bui_mini_godwell_khong_day_luc_hut_6000mpa_lam_sach_ban_phim_o_to_nho_gon_pin_sac_tien_loi`
    },
    {
        name: "laptop asus rog strix scar 18 2024 g834 (i9-14900hx/ rtx 4090/ram 64gb/ ssd 2tb/ 18' 2.5k miniled 240hz)".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/laptop_asus_rog_strix_scar_18_2024_g834_i9_14900hx_rtx_4090_ram_64gb_ssd_2tb_18_2_5k_miniled_240hz`
    },
    {
        name: "sữa tăng cơ giảm mỡ [có bình shaker] whey protein isolate bodygold túi 1kg".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/sua_tang_co_giam_mo_co_binh_shaker_whey_protein_isolate_bodygold_tui_1kg`
    },
    {
        name: "[ 24 lon ] nước uống tăng lực redbull energy drink - red bull nhập úc 250ml".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/lon_nuoc_uong_tang_luc_redbull_energy_drink_red_bull_nhap_uc_250ml`
    },
    {
        name: "dầu gội hương nước hoa cho nam romanno 650ml".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/dau_goi_huong_nuoc_hoa_cho_nam_romanno_650ml`
    },
    {
        name: "combo 5 hộp bút chì màu 36 màu đa dạng non toxic phù hợp cho bé thỏa thích sáng tạo".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/combo_5_hop_but_chi_mau_36_mau_da_dang_non_toxic_phu_hop_cho_be_thoa_thich_sang_tao`
    },
    {
        name: "dầu gội đầu hương nước hoa thơm mát cho nữ romanno 650ml".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/dau_goi_dau_huong_nuoc_hoa_thom_mat_cho_nu_romanno_650ml`
    },
    {
        name: "bút bi thiên long g1 ký uc 0.5mm đỏ (hộp 12 cây)".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/but_bi_thien_long_g1_ky_uc_05mm_do_hop_12_cay`
    },
    {
        name: "giày nam sneaker trắng xanh đen classy coolstyle chất liệu cao cấp".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/giay_nam_sneaker_trang_xanh_den_classy_coolstyle_chat_lieu_cao_cap`
    },
    // ----------------------------------------------------------------
    {
        name: "tăng cân haemovit vitamin giúp tăng cân cho người gầy trẻ em ăn ngủ ngon tăng cân từ 3-5kg cam kết an toàn".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/tang_can_haemovit_vitamin_giup_tang_can_cho_nguoi_gay_tre_em_an_ngu_ngon_tang_can_tu_3_5kg_cam_ket_an_toan`
    },
    {
        name: "(hàng chính hãng)thùng bò cụng redbull thái lan 24 lon 250ml".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/hang_chinh_hang_thung_bo_cung_redbull_thai_lan_24_lon_250ml`
    },
    {
        name: "sữa tăng cơ giảm mỡ whey protein isolate 500gram ( tặng bình lắc khi mua 2 túi )".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/sua_tang_co_giam_mo_whey_protein_isolate_500gram_tang_binh_lac_khi_mua_2_tui`
    },
    {
        name: "pin bộ phát wifi từ sim 3g/4g lte m80 router pin dự phòng 2400mah".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/pin_bo_phat_wifi_tu_sim_3g_4g_lte_m80_router_pin_du_phong_2400mah`
    },
    {
        name: "rongeo robot hút lau nhà robot quét nhà sạc usb thông minh bốn trong một quét, hút, lau và khử trùng hút bụi".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/rongeo_robot_hut_lau_nha_robot_quet_nha_sac_usb_thong_minh_bon_trong_mot_quet_hut_lau_va_khu_trung_hut_bui`
    },
    {
        name: "whey isolate muscleking 2 kg + tặng bình lắc (sữa tăng cơ hấp thụ nhanh)".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/whey_isolate_muscleking_2kg_tang_binh_lac_sua_tang_co_hap_thu_nhanh`
    },
    {
        name: "túi 10 viên khử mùi tẩy bồn cầu thế hệ mới 2x- thả xả toilet diệt khuẩn, tẩy sạch vệ sinh vết bám bẩn 88292".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/tui_10_vien_khu_mui_tay_bon_cau_the_he_moi_2x_tha_xa_toilet_diet_khuan_tay_sach_ve_sinh_vet_bam_ban_88292`
    },
    {
        name: "túi xách nữ thiết kế dáng vuông túi nữ đẹp đi tiệc sang trọng và thanh lịch tdc128 ok".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/tui_xach_nu_thiet_ke_dang_vuong_tui_nu_dep_di_tiec_sang_trong_va_thanh_lich_tdc128_ok`
    },
    {
        name: "[chính hãng] ostrovit creatine monohydrate (300g, 500g) tăng cơ, tăng sức mạnh & hiệu suất tập luyện".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/chinh_hang_ostrovit_creatine_monohydrate_300g_500g_tang_co_tang_suc_manh_hieu_suat_tap_luyen`
    },
    {
        name: "mô hình mica - mô hình đứng mica standee luffy roronoa zoro ace anime".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/mo_hinh_mica_mo_hinh_dung_mica_standee_luffy_roronoa_zoro_ace_anime`
    },
    //----------------------------------------------------------------
    {
        name: "1kg bim bim khoai tây".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/kg_bim_bim_khoai_tay`
    },
    {
        name: "[hàng sẵn - giao nhanh 2h] xúc xích cao cấp dành cho chó mèo - lna".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/hang_san_giao_nhanh_2h_xuc_xich_cao_cap_danh_cho_cho_meo_lna`
    },
    {
        name: "usb phát wifi không dây 4g lte 150mbps hỗ trợ thẻ sim 4g tiện dụng".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/usb_phat_wifi_khong_day_4g_lte_150mbps_ho_tro_the_sim_4g_tien_dung`
    },
    {
        name: "cân sức khỏe điện tử - cân phân tích cơ thể kỹ thuật số bluetooth với ứng dụng cho điện thoại di động".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/can_suc_khoe_dien_tu_can_phan_tich_co_the_ky_thuat_so_bluetooth_voi_ung_dung_cho_dien_thoai_di_dong`
    },
    {
        name: "nhựa bình nước, tách trà, cốc nước sôi, xách tay gấp, tốt cho sức khỏe".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/nhua_binh_nuoc_tach_tra_coc_nuoc_soi_xach_tay_gap_tot_cho_suc_khoe`
    },
    {
        name: "nước xịt khử trùng tay và không khí chính hãng 50ml".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/nuoc_xit_khu_trung_tay_va_khong_khi_chinh_hang_50ml`
    },
    {
        name: "túi xách nữ dây đeo chéo, thiết kế đơn giản thời trang và thanh lịch tp42".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/tui_xach_nu_day_deo_cheo_thiet_ke_don_gian_thoi_trang_va_thanh_lich_tp42`
    },
    {
        name: "chảo chống dính cao cấp 28cm chống dính xịn".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/chao_chong_dinh_cao_cap_28cm_chong_dinh_xin`
    },
    {
        name: "máy xay sinh tố cầm tay - máy xay đa năng với nhiều tốc độ và phụ kiện đi kèm".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/may_xay_sinh_to_cam_tay_may_xay_da_nang_voi_nhieu_toc_do_va_phu_kien_di_kem`
    },
    {
        name: "bình nước inox giữ nhiệt cho cà phê, trà, nước nóng, lạnh".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/binh_nuoc_inox_giu_nhiet_cho_ca_phe_tra_nuoc_nong_lanh`
    },
    {
        name: "bút bi thiên long bút bi cao cấp thiết kế sang trọng 0.7mm (hộp 12 cây)".toLowerCase(),
        link: `https://json-be-shopee.onrender.com/but_bi_thien_long_but_bi_cao_cap_thiet_ke_sang_trong_07mm_hop_12_cay`
    },
];

export { DataProduct };
