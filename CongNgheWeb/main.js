// Search on page

//==================================================


// Change color on scroll
$(window).scroll(function(){
	$('header nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});

// Make spin loading

var timer;

function loadContainer() {
	$("#menu-container").attr("style","display:none")
	$("#loader").attr("style","display:block")
	timer = setTimeout(showPage, 1500);
}

function showPage() {
	$("#menu-container").attr("style","display:block")
	$("#loader").attr("style","display:none")
}

// Hiển thị các món đã chọn
function foodAddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Ẩn các món chưa chọn
function foodRemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// function filter
function filterSelection(namef) {
	var x, i;
	x = document.getElementsByClassName("food");
	//Thêm class show vào các phần tử được chọn và xóa class show khỏi các phần tử được chọn
	for (i = 0; i < x.length; i++) {
	  foodRemoveClass(x[i], "show");
	  if (x[i].className.indexOf(namef) > -1) foodAddClass(x[i], "show");
	}
}
  

filterSelection('mainf')

$("li#main-btn").click(function(){
	loadContainer();
	filterSelection('mainf')
})

$('li#lunch-btn').click(function(){
	loadContainer();
	filterSelection('lunchf')
})

$('li#dinner-btn').click(function(){
	loadContainer();
	filterSelection('dinnerf')
})

$('li#drink-btn').click(function(){
	loadContainer();
	filterSelection('drinkf')
})

$('li#fastfood-btn').click(function(){
	loadContainer();
	filterSelection('fastf')
})

// thêm class active để highlight button menu
var menuNavItems = document.getElementById("menu-ul");
var navLink = menuNavItems.getElementsByClassName("nav-link");
for (var i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Làm search funtion
$('button#search-btn').click(function(){
	var sText = $('input#search-text').val().toLowerCase();
	
	var x, i;
	x = document.getElementsByClassName("food");
	for (i = 0; i < x.length; i++) {
		foodRemoveClass(x[i], "show");
		if (x[i].innerHTML.toLowerCase().indexOf(sText) > -1) foodAddClass(x[i], "show");
	}
})


function submitform(){
	if (typeof(Storage) !== "undefined") {
		sessionStorage.setItem("fullname", $('#fullname').val());
		sessionStorage.setItem("persons", $('#persons').val());
		sessionStorage.setItem("phonenumber", $('#phonenumber').val());
		sessionStorage.setItem("date", $('#date').val());
		sessionStorage.setItem("email", $('#email').val());
		sessionStorage.setItem("time", $('#time').val());
	} 
	else {
		alert("Xin lỗi webstore không hoạt động")
	}
}

function showData(){
	var table = "<table class='table table-striped shadow-lg p-3 mb-5 bg-white rounded'>" + 
					"<tr><th>Họ & Tên</th> <td>"+sessionStorage.getItem('fullname')+"</td></tr>"+
					"<tr><th>Số người tham dự</th> <td>"+sessionStorage.getItem('persons')+"</td></tr>"+
					"<tr><th>Số điện thoại</th> <td>"+sessionStorage.getItem('phonenumber')+"</td></tr>"+
					"<tr><th>Ngày</th> <td>"+sessionStorage.getItem('date')+"</td></tr>"+
					"<tr><th>Email</th> <td>"+sessionStorage.getItem('email')+"</td></tr>"+
					"<tr><th>Thời gian</th> <td>"+sessionStorage.getItem('time')+"</td></tr>"+
				"</table>";
	document.getElementById("reservation-list").innerHTML = table;
}
// // Menu click

// // ==================================== main ==================================
// $("li#main-btn").click(function(){
// 	//=====================================
// 	$("li#lunch-btn a").removeClass("active")
// 	$("li#main-btn a").addClass("active")
// 	$("li#dinner-btn a").removeClass("active")
// 	$("li#drink-btn a").removeClass("active")
// 	$("li#fastfood-btn a").removeClass("active")
	
// 	//=======================================
// 	loadContainer();
	

// 	//food attr
// 	$("#food-1 div div img").attr("src", "./img/food/banhmichao/0.jpg")	
// 	$("#food-1 div div div a").attr("href","./pages/banhmichao.html")
// 	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh mì chảo")
// 	$("#food-1 .col-md-8 .card-body .describle").text("Bánh mì chảo là món ăn buổi sáng được hầu hết mọi người ưa thích.")
// 	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 06/06/2020")
	
// 	$("#food-2 div div img").attr("src", "./img/food/gaviensotcachua/0.jpg")	
// 	$("#food-2 div div div a").attr("href","./pages/gaviensotcachua.html")
// 	$("#food-2 .col-md-8 .card-body .card-title").text("Gà viên sốt cà chua")
// 	$("#food-2 .col-md-8 .card-body .describle").text("Gà viên sốt cà chua là món ăn có cách chế biến không cầu kì nhưng lại vô cùng hấp dẫn.")
// 	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 06/06/2020")

// 	$("#food-3 div div img").attr("src", "./img/food/chaohau/chaohao.jpg")	
// 	$("#food-3 div div div a").attr("href","./pages/chaohauhatsen.html")
// 	$("#food-3 .col-md-8 .card-body .card-title").text("Cháo hàu hạt sen")
// 	$("#food-3 .col-md-8 .card-body .describle").text("Cháo hàu hạt sen là một sự kết hợp hoàn hảo và đầy dưỡng chất, không những tốt cho gia đình bạn mà đặc biệt với các bé biếng ăn nữa đấy.")
// 	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-4 div div img").attr("src", "./img/food/comcahoi/0.jpg")	
// 	$("#food-4 div div div a").attr("href","./pages/comgaoluccahoivisa.html")
// 	$("#food-4 .col-md-8 .card-body .card-title").text("Cơm gạo lức cá hồi vị sả")
// 	$("#food-4 .col-md-8 .card-body .describle").text("Nếu như cơm gạo lứt là phần không thể thiếu dành cho những bạn muốn áp dụng chế độ ăn kiêng giảm cân hay ăn uống lành mạnh.")
// 	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")

// 	$("#food-5 div div img").attr("src", "./img/food/hutieumytho/0.jpg")	
// 	$("#food-5 div div div a").attr("href","./pages/hutieucuamytho.html")
// 	$("#food-5 .col-md-8 .card-body .card-title").text("Hủ tiếu cua mỹ tho")
// 	$("#food-5 .col-md-8 .card-body .describle").text("Hủ tiếu cua Mỹ Tho được nhắc đến như một đặc sản của Mỹ Tho. Những ai có dịp du hí đến vùng đất này cũng nên thử qua một lần để trải nghiệm.")
// 	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")
	
// 	$("#food-6 div div img").attr("src", "./img/food/mitepmo/0.jpg")	
// 	$("#food-6 div div div a").attr("href","./pages/mitrontepmo.html")
// 	$("#food-6 .col-md-8 .card-body .card-title").text("Mì trộn tép mỡ")
// 	$("#food-6 .col-md-8 .card-body .describle").text("Mì trộn tóp mỡ, món ăn với cách chế biến đơn giản nhưng hương vị đặc sắc vô cùng.")
// 	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 07/06/2020")

// 	$("#food-7 div div img").attr("src", "./img/food/nuino/0.jpg")	
// 	$("#food-7 div div div a").attr("href","./pages/nuinonauthitbam.html")
// 	$("#food-7 .col-md-8 .card-body .card-title").text("Nui nơ nấu thịt bằm")
// 	$("#food-7 .col-md-8 .card-body .describle").text("Nui nơ nấu thịt bằm là món ăn sáng nhanh gọn, mới lạ thay cho món nui truyền thống.")
// 	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 07/06/2020")

// 	$("#food-8 div div img").attr("src", "./img/food/salatbap/0.jpg")	
// 	$("#food-8 div div div a").attr("href","./pages/salatbapnuhoangdo.html")
// 	$("#food-8 .col-md-8 .card-body .card-title").text("Salat bắp nữ hoàng đỏ")
// 	$("#food-8 .col-md-8 .card-body .describle").text("Bắp Nữ hoàng đỏ là một loại bắp có thể ăn sống mà không cần phải trải qua chế biến.")
// 	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-9 div div img").attr("src", "./img/food/salattomhum/salat.jpg")	
// 	$("#food-9 div div div a").attr("href","./pages/salattomhum.html")
// 	$("#food-9 .col-md-8 .card-body .card-title").text("Salat tôm hùm")
// 	$("#food-9 .col-md-8 .card-body .describle").text("Món ngon dễ làm cho bạn, chỉ trong tích tắc, Kết hợp với bắp Mỹ, bơ trái và sốt trộn mayonnaise, chua chua và béo béo cực hấp dẫn.")
// 	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 07/06/2020")

// 	$("#food-10 div div img").attr("src", "./img/food/Smoothiethanhlongdonhietdoi/0.jpg")	
// 	$("#food-10 div div div a").attr("href","./pages/smoothiethanhlongdonhietdoi.html")
// 	$("#food-10 .col-md-8 .card-body .card-title").text("Smoothie thanh long đỏ nhiệt đới")
// 	$("#food-10 .col-md-8 .card-body .describle").text("Bạn có thể tự làm cho mình một tô smoothie thật ngon miệng và bắt mắt, hương vị chua ngọt nhiệt đới rất dễ thưởng thức.")
// 	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")
	
// })


// // ==================================== lunch ==================================
// $("li#lunch-btn").click(function(){
// 	$("li#lunch-btn a").addClass("active")
// 	$("li#main-btn a").removeClass("active")
// 	$("li#dinner-btn a").removeClass("active")
// 	$("li#drink-btn a").removeClass("active")
// 	$("li#fastfood-btn a").removeClass("active")
	
// 	//loading----------------------------------
// 	loadContainer();

// 	//food attr
	
// 	$("#food-1 div div img").attr("src", "./img/food/canhmongtoi/0.jpg")	
// 	$("#food-1 div div div a").attr("href","./pages/canhcuadongmongtoi.html")
// 	$("#food-1 .col-md-8 .card-body .card-title").text("Canh cua đồng mồng tơi")
// 	$("#food-1 .col-md-8 .card-body .describle").text("Món canh cua đồng đơn giản, dễ nấu nhưng đậm đà hương vị, phong phú cho bữa ăn gia đình.")
// 	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")

// 	$("#food-2 div div img").attr("src", "./img/food/tomhapbi/0.jpg")	
// 	$("#food-2 div div div a").attr("href","./pages/tomhapbingoi.html")
// 	$("#food-2 .col-md-8 .card-body .card-title").text("Tôm hấp bí ngòi")
// 	$("#food-2 .col-md-8 .card-body .describle").text("Tôm hấp bí ngòi là món ăn đơn giản, thanh đạm nhưng không kém phần bổ dưỡng và hấp dẫn.")
// 	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")
	
	
// 	$("#food-3 div div img").attr("src", "./img/food/canhchuacaithao.jpg")	
// 	$("#food-3 div div div a").attr("href","./pages/canhchuacaithao.html")
// 	$("#food-3 .col-md-8 .card-body .card-title").text("Canh chua cải thảo")
// 	$("#food-3 .col-md-8 .card-body .describle").text("Vào những ngày nắng nóng hay trời mưa, thì có 1 tô canh chua cũng rất là hợp lý. Món này không tốn nhiều chi phí.")
// 	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 06/03/2020")

// 	$("#food-4 div div img").attr("src", "./img/food/mamtepmientay/mamtep.jpg")	
// 	$("#food-4 div div div a").attr("href","./pages/mamtepmientay.html")
// 	$("#food-4 .col-md-8 .card-body .card-title").text("Mắm tép miền tây")
// 	$("#food-4 .col-md-8 .card-body .describle").text("Mắm Tép Miền Tây - món ăn ngon dân dã của miền đồng bằng sông nước.")
// 	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")

	
//     $("#food-5 div div img").attr("src", "./img/food/canhgachiennuocmam/0.jpg")	
// 	$("#food-5 div div div a").attr("href","./pages/canhgachiennuocmam.html")
// 	$("#food-5 .col-md-8 .card-body .card-title").text("Cánh gà chiên nước mắm")
// 	$("#food-5 .col-md-8 .card-body .describle").text("Cà chiên nước mắm là món ăn ngon cho bữa cơm gia đình.")
// 	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 06/03/2020")

// 	$("#food-6 div div img").attr("src", "./img/food/chagiotom/0.jpg")	
// 	$("#food-6 div div div a").attr("href","./pages/chagiotom.html")
// 	$("#food-6 .col-md-8 .card-body .card-title").text("Chả giò tôm")
// 	$("#food-6 .col-md-8 .card-body .describle").text("Món chả giò tomyum giòn thơm ở phần vỏ kết hợp với vị ngọt bùi của tôm mực sẽ tạo hương vị thơm ngon ngây ngất khi bạn thưởng thức.")
// 	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-7 div div img").attr("src", "./img/food/thitkhotrungcut/7.jpg")	
// 	$("#food-7 div div div a").attr("href","./pages/thitkhotrungcut.html")
// 	$("#food-7 .col-md-8 .card-body .card-title").text("Thịt kho trứng cút")
// 	$("#food-7 .col-md-8 .card-body .describle").text("Thịt kho trứng cút đậm đà với thịt heo ba chỉ béo dai, trứng cút bùi béo ngấm đều gia vị.")
// 	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-8 div div img").attr("src", "./img/food/khoquetchamraucu/khoquet.jpg")	
// 	$("#food-8 div div div a").attr("href","./pages/khoquetchamraucu.html")
// 	$("#food-8 .col-md-8 .card-body .card-title").text("Kho quẹt chấm rau củ")
// 	$("#food-8 .col-md-8 .card-body .describle").text("Kho quẹt chấm rau củ là món ngon dân dã của người miền Tây, thơm nồng mùi nước mắm rất đặc trưng.")
// 	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")

// 	$("#food-9 div div img").attr("src", "./img/food/thitheothom/0.jpg")	
// 	$("#food-9 div div div a").attr("href","./pages/thitheokhothom.html")
// 	$("#food-9 .col-md-8 .card-body .card-title").text("Thịt heo kho thơm")
// 	$("#food-9 .col-md-8 .card-body .describle").text("Một món ăn dân dã quen thuộc trong bữa ăn gia đình, mang vị mặn, chua, ngọt hài hòa rất thú vị và đặc biệt.")
// 	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")

// 	$("#food-10 div div img").attr("src", "./img/food/mucsate/0.jpg")	
// 	$("#food-10 div div div a").attr("href","./pages/mucxaosate.html")
// 	$("#food-10 .col-md-8 .card-body .card-title").text("Mực xào sa tế")
// 	$("#food-10 .col-md-8 .card-body .describle").text("Món ngon cho bữa cơm gia đình hay dịp tụ họp bạn bè. Hãy chuẩn bị nguyên liệu và bắt tay vào làm ngay thôi.")
// 	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")



// })


// // ==================================== dinner ==================================
// $("li#dinner-btn").click(function(){
// 	$("li#lunch-btn a").removeClass("active")
// 	$("li#main-btn a").removeClass("active")
// 	$("li#dinner-btn a").addClass("active")
// 	$("li#drink-btn a").removeClass("active")
// 	$("li#fastfood-btn a").removeClass("active")

// 	//loading----------------------------------
// 	loadContainer();

// 	//food attr
// 	$("#food-1 div div img").attr("src", "./img/food/canhghe/0.jpg")	
// 	$("#food-1 div div div a").attr("href","./pages/canhghekimchi.html")
// 	$("#food-1 .col-md-8 .card-body .card-title").text("Canh ghẹ kim chi")
// 	$("#food-1 .col-md-8 .card-body .describle").text("Vị ngọt tự nhiên của ghẹ kết hợp vị chua cay thêm chút giòn giòn của kim chi sẽ tạo nên món ăn ngon tuyệt.")
// 	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")
	
// 	$("#food-2 div div img").attr("src", "./img/food/ochuong/1-1.jpg")	
// 	$("#food-2 div div div a").attr("href","./pages/ochuonghapbapsatac.html")
// 	$("#food-2 .col-md-8 .card-body .card-title").text("Ốc hương hấp bắp sả tắc")
// 	$("#food-2 .col-md-8 .card-body .describle").text("Ốc hương chế biến món nào cũng ngon hết, ốc hương hấp bắp sả tắc ăn một lần là nghiện luôn đấy!")
// 	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-3 div div img").attr("src", "./img/food/bachtuocphomai/bachtuoc.jpeg")	
// 	$("#food-3 div div div a").attr("href","./pages/bachtuocsotbophomaicay.html")
// 	$("#food-3 .col-md-8 .card-body .card-title").text("Bạch tuộc sốt bơ phô mai cay")
// 	$("#food-3 .col-md-8 .card-body .describle").text("Bạch tuộc sốt bơ phô mai cay rất được giới trẻ ưa thích, một món lý tưởng cho những ngày mưa lạnh.")
// 	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")

// 	$("#food-4 div div img").attr("src", "./img/food/mucnuong/0.jpg")	
// 	$("#food-4 div div div a").attr("href","./pages/mucnuongdahapbia.html")
// 	$("#food-4 .col-md-8 .card-body .card-title").text("Mực nướng đá hấp bia")
// 	$("#food-4 .col-md-8 .card-body .describle").text("Mực nướng được hấp chín trên đá cuội giúp giữ được lượng nước và không làm mất đi nhiều chất dinh dưỡng đấy.")
// 	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-5 div div img").attr("src", "./img/food/bachicuon/0.jpg")	
// 	$("#food-5 div div div a").attr("href","./pages/thitbachicuonnamkimcham.html")
// 	$("#food-5 .col-md-8 .card-body .card-title").text("Thịt ba chỉ cuộn nấm kim châm")
// 	$("#food-5 .col-md-8 .card-body .describle").text("Vị đậm đà của những miếng ba chỉ hun khói thấm đượm vào những cây nấm kim châm tạo cho món ăn trở nên hấp dẫn hơn.")
// 	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")

// 	$("#food-6 div div img").attr("src", "./img/food/tomxoctoiot/tomxoctoiot.jpg")	
// 	$("#food-6 div div div a").attr("href","./pages/tomxoctoiot.html")
// 	$("#food-6 .col-md-8 .card-body .card-title").text("Tôm xốc tỏi ớt")
// 	$("#food-6 .col-md-8 .card-body .describle").text("Nếu đang cần mồi bén để nhắm cùng bia thì chắc chắn món Tôm xóc tỏi của mình là số một rồi.")
// 	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 06/03/2020")

// 	$("#food-7 div div img").attr("src", "./img/food/calocnuong/0.jpg")	
// 	$("#food-7 div div div a").attr("href","./pages/calocnuongriengme.html")
// 	$("#food-7 .col-md-8 .card-body .card-title").text("Cá lóc nướng riềng mè")
// 	$("#food-7 .col-md-8 .card-body .describle").text("Cá quả nướng riềng mẻ được nhiều người yêu thích và lựa chọn cho bữa tiệc gia đình hoặc khi ra nhà hàng.")
// 	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")

// 	$("#food-8 div div img").attr("src", "./img/food/tomvienusenchiengion/tomviencusenchiengion.jpg")	
// 	$("#food-8 div div div a").attr("href","./pages/tomviencusenchiengion.html")
// 	$("#food-8 .col-md-8 .card-body .card-title").text("Tôm viên củ sen chiên giòn")
// 	$("#food-8 .col-md-8 .card-body .describle").text("Một chút biến tấu với củ sen thanh ngọt và thịt tôm được bọc bởi một lớp bột giòn xù sẽ đem lại cảm giác thích thú ngay từ cái nhìn đầu tiên.")
// 	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 05/06/2020")

// 	$("#food-9 div div img").attr("src", "./img/food/launam/0.jpg")	
// 	$("#food-9 div div div a").attr("href","./pages/launamthiennhien.html")
// 	$("#food-9 .col-md-8 .card-body .card-title").text("Lẩu nấm thiên nhiên")
// 	$("#food-9 .col-md-8 .card-body .describle").text("Trong các dịp sum họp gia đình hay những bữa ăn cuối tuần, thì món lẩu luôn là sự lựa chọn hàng đầu của các bà nội trợ.")
// 	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 11/06/2020")
	
// 	$("#food-10 div div img").attr("src", "./img/food/launhungxienque/0.jpg")	
// 	$("#food-10 div div div a").attr("href","./pages/launhungxienque.html")
// 	$("#food-10 .col-md-8 .card-body .card-title").text("Lẩu nhúng xiên que")
// 	$("#food-10 .col-md-8 .card-body .describle").text("Cuối tuần ở nhà chưa biết ăn gì, hãy thử ngay món Lẩu nhúng xiên que siêu hấp dẫn dưới đây.")
// 	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 06/06/2020")



// })


// // ==================================== drink ==================================
// $("li#drink-btn").click(function(){
// 	$("li#lunch-btn a").removeClass("active")
// 	$("li#main-btn a").removeClass("active")
// 	$("li#dinner-btn a").removeClass("active")
// 	$("li#drink-btn a").addClass("active")
// 	$("li#fastfood-btn a").removeClass("active")

// 	//loading----------------------------------
// 	loadContainer();

// 	//food attr
// 	$("#food-1 div div img").attr("src", "./img/food/caphetrung/0.jpg")	
// 	$("#food-1 div div div a").attr("href","./pages/caphetrung.html")
// 	$("#food-1 .col-md-8 .card-body .card-title").text("Cà phê trứng")
// 	$("#food-1 .col-md-8 .card-body .describle").text("Cafe trứng là món thức uống đặc trưng của Hà Nội.")
// 	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-2 div div img").attr("src", "./img/food/cocktailcherryamaretto/0.jpg")	
// 	$("#food-2 div div div a").attr("href","./pages/cocktailcherryamaretto.html")
// 	$("#food-2 .col-md-8 .card-body .card-title").text("Cocktail Cherry Amaretto")
// 	$("#food-2 .col-md-8 .card-body .describle").text("Cocktail với vị cherry chua chua, ngọt ngọt hòa cùng rượu Amaretto thơm lừng cực ngon và hấp dẫn rất dễ làm nên bạn hãy thử làm ngay nhé.")
// 	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")

// 	$("#food-3 div div img").attr("src", "./img/food/duadam/0.jpg")	
// 	$("#food-3 div div div a").attr("href","./pages/duadam.html")
// 	$("#food-3 .col-md-8 .card-body .card-title").text("Dừa dầm")
// 	$("#food-3 .col-md-8 .card-body .describle").text("Dừa dầm Hải Phòng - món ăn vặt giải nhiệt cực hấp dẫn cho những tín đồ hảo ngọt.")
// 	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-4 div div img").attr("src", "./img/food/milodalgona/0.jpeg")	
// 	$("#food-4 div div div a").attr("href","./pages/milodalgona.html")
// 	$("#food-4 .col-md-8 .card-body .card-title").text("Milo dalgona")
// 	$("#food-4 .col-md-8 .card-body .describle").text(" Dành cho những tín đồ không không thích vị đắng của cà phê.")
// 	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 08/06/2020")

// 	$("#food-5 div div img").attr("src", "./img/food/nuocchanhsahatchia/0.jpg")	
// 	$("#food-5 div div div a").attr("href","./pages/nuocchanhsahatchia.html")
// 	$("#food-5 .col-md-8 .card-body .card-title").text("Nước chanh sả hạt chia")
// 	$("#food-5 .col-md-8 .card-body .describle").text("Nước Chanh Hạt Chia Hương Sả là thức uống detox ngon lành lại đơn giản tại nhà.")
// 	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-6 div div img").attr("src", "./img/food/suachuauong/0.jpg")	
// 	$("#food-6 div div div a").attr("href","./pages/suachuauong.html")
// 	$("#food-6 .col-md-8 .card-body .card-title").text("Sữa chua uống")
// 	$("#food-6 .col-md-8 .card-body .describle").text("Ngon tuyệt cú mèo.")
// 	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-7 div div img").attr("src", "./img/food/suadauphong/0.jpg")	
// 	$("#food-7 div div div a").attr("href","./pages/suadauphong.html")
// 	$("#food-7 .col-md-8 .card-body .card-title").text("Sữa đậu phộng")
// 	$("#food-7 .col-md-8 .card-body .describle").text("Đậu phộng không chỉ được được chế biến thành nhiều món ăn hấp dẫn mà còn là thức uống rất tốt cho sức khỏe.")
// 	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-8 div div img").attr("src", "./img/food/suagaoluc/0.jpg")	
// 	$("#food-8 div div div a").attr("href","./pages/suagaoluc.html")
// 	$("#food-8 .col-md-8 .card-body .card-title").text("Sữa gạo lức")
// 	$("#food-8 .col-md-8 .card-body .describle").text("Sữa Gạo Lức là thức uống từ hạt vô cùng thơm ngon.")
// 	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-9 div div img").attr("src", "./img/food/suatuoitranchauduongnau/0.jpg")	
// 	$("#food-9 div div div a").attr("href","./pages/suatuopitranchauduongnau.html")
// 	$("#food-9 .col-md-8 .card-body .card-title").text("Sữa tươi trân châu đường nâu")
// 	$("#food-9 .col-md-8 .card-body .describle").text("Vị béo ngậy của sữa tươi thanh trùng cùng trân châu dai dai, ngọt ngọt - loại topping gây sốt.")
// 	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-10 div div img").attr("src", "./img/food/tratranchauhoadaubiec/0.jpg")	
// 	$("#food-10 div div div a").attr("href","./pages/tranchauhoadaubiec.html")
// 	$("#food-10 .col-md-8 .card-body .card-title").text("Trân châu hoa đậu biếc")
// 	$("#food-10 .col-md-8 .card-body .describle").text("Trà hoa Đậu Biếc hay còn được gọi với cái tên thân thương trà Lam Hồ Điệp với màu tim tím đặc trưng.")
// 	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")
// })


// // ==================================== fastfood ==================================
// $("li#fastfood-btn").click(function(){
// 	$("li#lunch-btn a").removeClass("active")
// 	$("li#main-btn a").removeClass("active")
// 	$("li#dinner-btn a").removeClass("active")
// 	$("li#drink-btn a").removeClass("active")
// 	$("li#fastfood-btn a").addClass("active")

// 	//loading----------------------------------
// 	loadContainer();

// 	//food attr
// 	$("#food-1 div div img").attr("src", "./img/food/banhkem/0.jpg")	
// 	$("#food-1 div div div a").attr("href","./pages/banhkemredvelvet.html")
// 	$("#food-1 .col-md-8 .card-body .card-title").text("Bánh kem Red Velvet")
// 	$("#food-1 .col-md-8 .card-body .describle").text("Bánh Red Velvet là sự kết hợp hài hòa của từng lớp bánh đỏ thắm đan xen với những lớp kem trắng mịn.")
// 	$("#food-1 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")
	
// 	$("#food-2 div div img").attr("src", "./img/food/banhlantranchau/0.jpg")	
// 	$("#food-2 div div div a").attr("href","./pages/banhlantrasua.html")
// 	$("#food-2 .col-md-8 .card-body .card-title").text("Bánh plan trà sữa")
// 	$("#food-2 .col-md-8 .card-body .describle").text("Bạn thích bánh flan, bạn cũng thích nhâm nhi trà sữa với trân châu đường nâu ngọt lịm.")
// 	$("#food-2 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")

// 	$("#food-3 div div img").attr("src", "./img/food/banhmikhoailangtim/banhmi.jpeg")	
// 	$("#food-3 div div div a").attr("href","./pages/banhmikhoailangtim.html")
// 	$("#food-3 .col-md-8 .card-body .card-title").text("Bánh mì khoai lang tím")
// 	$("#food-3 .col-md-8 .card-body .describle").text("Giới thiệu cho bạn món bánh mì khoai lang tím vừa dễ làm lại thơm mềm, vừa đẹp mắt cho cả nhà đây.")
// 	$("#food-3 .col-md-8 .card-body .date .text-muted").text("Last updated 12/06/2020")

// 	$("#food-4 div div img").attr("src", "./img/food/lechung/0.jpg")	
// 	$("#food-4 div div div a").attr("href","./pages/lechungthanhmat.html")
// 	$("#food-4 .col-md-8 .card-body .card-title").text("Lê chưng thanh mát")
// 	$("#food-4 .col-md-8 .card-body .describle").text("Lê Chưng Thanh Mát - được dân gian ví như bài thuốc trị ho khan hiệu quả.")
// 	$("#food-4 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-5 div div img").attr("src", "./img/food/goidudusohuyet/0.jpg")	
// 	$("#food-5 div div div a").attr("href","./pages/goidudusohuyet.html")
// 	$("#food-5 .col-md-8 .card-body .card-title").text("Gỏi đu đủ sò huyết")
// 	$("#food-5 .col-md-8 .card-body .describle").text("Vị giòn giòn của đu đủ, chua cay mặn ngọt của nước sốt và vị ngon đặc trưng của sò huyết sẽ khiến bạn muốn ăn mãi không thôi.")
// 	$("#food-5 .col-md-8 .card-body .date .text-muted").text("Last updated 03/06/2020")

// 	$("#food-6 div div img").attr("src", "./img/food/goimangcut/mangcut.jpg")	
// 	$("#food-6 div div div a").attr("href","./pages/goimangcut.html")
// 	$("#food-6 .col-md-8 .card-body .card-title").text("Gỏi măng cụt")
// 	$("#food-6 .col-md-8 .card-body .describle").text("Gỏi măng cụt là đặc sản của vùng miệt vườn Lái Thiêu. Hãy vào bếp cùng mình nào vì đã có sẵn công thức ngon đúng, chuẩn vị rồi đây.")
// 	$("#food-6 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-7 div div img").attr("src", "./img/food/xucxichphomai/cooky-recipe-cover-r39840.jpg")	
// 	$("#food-7 div div div a").attr("href","./pages/xucxichphomai.html")
// 	$("#food-7 .col-md-8 .card-body .card-title").text("Xúc xích phô mai")
// 	$("#food-7 .col-md-8 .card-body .describle").text("Xúc xích phô mai là món ăn vặt giòn tan được áo một lớp bột và khoai tây bên ngoài, ăn kèm tương cà và sốt mayonnaise ngon lành.")
// 	$("#food-7 .col-md-8 .card-body .date .text-muted").text("Last updated 10/06/2020")

// 	$("#food-8 div div img").attr("src", "./img/food/phomaique/0.jpg")	
// 	$("#food-8 div div div a").attr("href","./pages/phomaiquebockhoailang.html")
// 	$("#food-8 .col-md-8 .card-body .card-title").text("Phô mai que bọc khoai lang")
// 	$("#food-8 .col-md-8 .card-body .describle").text("Với lớp vỏ bọc khoai chiên giòn, bên trong là nhân phô mai kéo sợi dễ thực hiện lại rất thích hợp cho ngày cuối tuần cùng gia đình.")
// 	$("#food-8 .col-md-8 .card-body .date .text-muted").text("Last updated 05/06/2020")

// 	$("#food-9 div div img").attr("src", "./img/food/salatbap/0.jpg")	
// 	$("#food-9 div div div a").attr("href","./pages/salatbapnuhoangdo.html")
// 	$("#food-9 .col-md-8 .card-body .card-title").text("Salat bắp nữ hoàng đỏ")
// 	$("#food-9 .col-md-8 .card-body .describle").text("Bắp Nữ hoàng đỏ là một loại bắp có thể ăn sống mà không cần phải trải qua chế biến.")
// 	$("#food-9 .col-md-8 .card-body .date .text-muted").text("Last updated 10/6/2020")

// 	$("#food-10 div div img").attr("src", "./img/food/salattomhum/salat.jpg")	
// 	$("#food-10 div div div a").attr("href","./pages/salattomhum.html")
// 	$("#food-10 .col-md-8 .card-body .card-title").text("Salat tôm hùm")
// 	$("#food-10 .col-md-8 .card-body .describle").text("Món ngon dễ làm cho bạn, chỉ trong tích tắc. Kết hợp với bắp Mỹ, bơ trái và sốt trộn mayonnaise, chua chua và béo béo cực hấp dẫn. ")
// 	$("#food-10 .col-md-8 .card-body .date .text-muted").text("Last updated 7/6/2020")
// })

//make search button

