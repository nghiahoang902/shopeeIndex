<!--I
        1. h1 - h6: heading
        2. p: paragraph
        3. img: image
        4. a: anchor (thẻ liên kết trang)
        5. ul, li: unordered list, list item (hiển thị dạng danh sách)
        6. table
            * thead:
                <th>: table heading
            * tbody:
                <tr>: table round
        7. input
        8. button
        9, div: tạo 1 khối bao quanh những phần tử khác
            
    -->

<!-- II.CSS Unit
1. Absolute?
    .px
    .pt
    .cm
    .mm
    .inch
    .pc
2. Relative?
    .%
    .rem (phụ thuộc vào thẻ html{})
    .em  (phụ thuộc vào thẻ đứng ngay sau nó)
    .vw : viewport width (= %tổng trong web)
    .vh : viewport height
    (50vh: 50% tỷ lệ khung theo chiều dọc)
    .vmin
    .vmax
    .ex
    .ch -->



<!-- III.
    CSS function:
    . var()
    . linear-gradient()
    . rgba()
    . rgb()
    . calc() :calculator(hàm tính toán)
    . attr() :attribute
  -->



<!-- 
    IV. CSS pseudo-classes:
    :root
    :hover
    :active
    :first-child
    :last-child
 -->



<!-- 
    V. Css pseudo-element
    ::before
    ::after
    ::first-letter
    ::first-line
    ::selection
 -->



<!-- VI. Position 
1. Relative : vị trí tương đối(lấy mình là chính tọa độ)
2. Absolute
3. Fixed
4. Sticky
-->


<!-- CSS Flex
1. display: flex | inline-flex
2. flex-direction: row | column
3. flex-wrap: nowrap | wrap |wrap-reverse (co màn hình lại, data xuống dòng)
4. flex-basic: <length>
5. justify-content: flex-start | flex-end | center |space-between |space-around
6. justyfy-self: flex start | flex-end | center
7. align-content: flex strat | flex-end | center
9. align-self: flex strat | flex-end | center
10. flex-grow: <number>
11. flex-shrink: <number>
12. flex: <number>
13. order: <number> (thay đổi thứ tự của flex-items)
14. animation: slineInleft ease 0.8s, fadeOut ease 1s 3s forwards;

}
@keyframes slineInleft{
    from{
        opacity: 0;
        transform: translateX(calc(100% + 30px));
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes fadeOut{
    to{
        opacity: 0;
    }
}
(3s sau mờ đi trong 1s, forward: dừng ở điểm cuối của animation)
--> 


    <!--
VII. BEM
1. Cú pháp:
.block
.block__element

.block--modifier
.block__element--modifier
    --!>

//Câu lệnh
1. text-decoration: none (bỏ dấu gạch chân trong thẻ "a href")
2. background-color: transparent; (độ trong suốt của thẻ "btn")
3. border: none; (bỏ viền xung quang thẻ "btn")
4. border-radius: px; (độ bo,cong của khung viền)
5. .btn:hover {
    opacity: ?s;
    } 
(hiệu ứng giảm độ đục, mờ)
6. cursor: default (con trỏ chuột)
7. border-left: 4px solid; (viền dày 4px, nét liền)
8. animation: slineInleft ease 0.8s;
(hiệu ứng chuyển cảnh)
9. @keyframes slineInleft{
    from{
        transform: translateX(calc(100% + 30px));
    }
    to{
        transform: translateX(0);
    }
}
(đặt vị trí chuyền vào hiệu ứng)
10. font-size: 100% (100%= 16px, 62,5%= 10px)
11. list-style: none; 
(xóa dấu "." trước thẻ <li></li>)
12. :nth-child(1...) || :first-child
(Sử dụng lớp giả pseudo class để css cho từng phần tử trong class)
13. object-fit: contain;
(ảnh nhỏ lại vẫn vừa với khuôn)
14. user-select: none;
(ko cho con trỏ chuột copy nội dung)
15. animation: headerNotiGrowth ease 0.3s;
    transform-origin: calc(100% - 32px) top;(hiện form từ bên trên ra toàn cảnh)
    will-change: opacity, transform;
}
@keyframes headerNotiGrowth {
    from {
        opacity: 0;
        transform: scale(0);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
16. z-index: 1;
(2 layout cũng thuộc 1 thẻ <div>, layout nào có "z-index" cao hơn thì nằm trên)
17. outline: none; (loại bỏ viền phát sáng lên nút hay input khi nhấn vào)
18. .auth-form__input:focus {
    border-color: #777;
}
(tập chung hiện màu viền nút lên)
19. line-height: 1.2rem;
(chiều cao dòng, chữ)
20. text-align: center;
(content khi xuống dòng được căn ở giữa)
21. overflow: hidden;
(khi màn hình con phủ qua màn hình cha thì sẽ bị ẩn đi.
Khi thằng còn nằm ngoài thằng cha, thì ẩn tk con đi.)
22. box-shadow: 0px 1px 2px #ccc;
(đổ bóng của khung)
23. .header-cart__img::before {
    position: absolute;
    content: "";
    border-style: solid;
    border-width: 12px 20px;
    border-color: transparent transparent var(--while-color) transparent;
    top: -20px;
    right: 10px;
}
(tạo 1 border hình tam giác trỏ xuống list thông tin)
24. .header-search__input:focus ~ 
.header-search__history {
    display: block;
}
(khi nhấn nút vào class "input" thì sẽ hiện tất cả phần tử trong class"history")
25. float: right;
(chỉnh ảnh, content sang 1 bên)
26. padding-inline-start: 0px;
(padding mặc định = 0, content sát ra lề)
27. .category__item-link {
    position: relative;
    transition: right linear 0.1s;
    right: 0;
}
.category__item-link:hover {
    color: var(--primary-color);
    right: -5px;
}
(Khi hover vào, thì lùi sang phải 5px)
28. .category__item-link::before {
    position: absolute;
    content: "";
    left: 13px;
    top: 50%;
    transform: translateY(-50%);
    border: solid;
    border-width: 5px 5px;
    border-color :transparent transparent transparent var(--primary-color);
}
(Khi tăng padding của thẻ "a" lên thì phần border vẫn nằm giữa dòng)

29. .home-product-item__img {
    padding-top: 100%;
    background-size: contain;
}
(padding-top để ảnh thành hình vuông, "contain" để ảnh vừa khít với khung)

30. line-height: 1rem;

    height: 2rem;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
(Khi chữ vượt quá 2 dòng theo chiều dọc, thì sẽ bị cắt đi và thay = dấu "...")

31. display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
(Trong trường hợp trình duyệt ko hỗ trợ làm dấu "...",)

32. text-decoration: line-through;
(gạch ngang giữa chữ hoặc số)

33. .home-product-item__rating {
    font-size: 1rem;
    color: #ccc;
    transform: scale(50%);
    transform-origin: right;
}
(Thu nhỏ icon hoặc ảnh lại khi ko dùng được thuộc tính "font-size", và cách sát lề phải)

34. transform: rotate(45deg);
(quay hướng mũi tên theo hướng 45 độ)

35. .home-product-item__favourite::before {
    position: absolute;
    content: "";
    border-top: 4px solid #ba2b0e;
    border-left: 4px solid transparent;
    left: 0;
    top: 16px;
}
(quay hướng mũi tên theo hướng 45 độ)

36. filter: brightness(70%);
(màu có độ sáng hiện tại = 70% độ sáng ban đầu)

37. .home-product-item__sale-off::before {
    position: absolute;
    content: "";
    top: 36px;
    border-width: 0 20px 4px;
    border-style: solid;
    border-color: transparent  rgba(255,212,36,.9) transparent  rgba(255,212,36,.9);
}
(tạo thêm phần tử giả ở phần giảm giá trên shopee)

38. box-shadow: 10px 5px 5px red;
    (10px: độ ngả bóng từ trái qua phải
    5px: độ ngả bóng từ trên xuống dưới
    5px: độ mờ của bóng)

39. text-align: left;
(dồn content về bên trái)

40. Những thẻ ko có thuộc tính: "display: block;"
(<a>,  )

41. html {
    font-family: 'Roboto', sans-serif;
}
(chữ có phông kiểu Roboto
sans-serif: chủng chữ ko chân)




    //Tổ hợp phím
1. "Ctrl + D" sau đó "Shift + Alt + >": sửa nhiều dòng code giống nhau 1 lúc.


//Trang web tham khảo
1. fontawesome.com (link icon)