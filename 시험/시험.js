let book = [
  {no:'inbn0002', title: '스프링', writer: '김기자', price:40000},
  {no:'inbn0003', title: '자바', writer: '이순신', price:25000},
  {no:'inbn0004', title: 'SQL', writer: '을지문덕', price:32000}
]

function bookList(){ //문제1 추가하고 삭제하는 함수
 //list.innerHTML=""; 
for(let i=0; i<book.length; i++) {
    let books = `<tr>
    <td><input type="checkbox"></td>
    <td>${book[i].no}</td>
    <td>${book[i].title}</td>
    <td>${book[i].writer}</td>
    <td class="price">${book[i].price}</td>
    <td><button id ="btn">삭제</button></td>
  </tr>`;
   list.innerHTML += books;
   list.addEventListener("click",function(ev){
    let node = ev.target;
    for(let j=0; j<books.length; j++) {
    if(node == document.querySelectorAll("#btn")[j]){
    node.closest("tr").remove();   
    book.splice(i,1);
    }
  }
  count();
}) 
}   
}
//배열의 데이터로 태그 그리기
bookList();
//가격 총금액 계산
/* priceTotalCalc();
//let bodyList = document.getElementById("list");
list.addEventListener("click",function(ev){
  if(ev.target.nodeName == "BUTTON") {
    //ev.target.closest("tr").remove();
    //배열에서 삭제
    let no = ev.target.closest("tr").children[1].innerText;
    for(let i=0; i<book.length; i++) {
      if(books[i].no == no) {
        books.splice(i,1);
      }
    }

  //다시그리기
  bookList();
  }
}) */

 addbtn.addEventListener("click", function(ev){
  let addObj = {no:no.value, 
                title: title.value, 
                writer: writer.value, 
                price:price.value} 
  })
 
  //입력값 체크
/*   if(!inputCheck()){
    return;
  }
   //배열에 추가
   book.push(addObj);
  //배열의 내용을 태그로 그리고

  priceTotalCalc();

  bookList();
  //텍스트필드 클리어
  inputClear();

}) */
/* 
function inputClear() {
  no.value ="";
  title.value ="";
  writer.value="";
  price.value="";
} */

/* function inputCheck() {
  if(no.value =="" ) {
    alert("도서번호 등록");
    no.focus()
    return false;
  }
  if(title.value =="" ) {
    alert("도서명 등록");
    title.focus()
    return false;
  }
  return true;
} */
//총금액계산
/* function priceTotalCalc(){
  let total = 0;
  for(let i=0; i<book.length; i++) {
    total += parseInt(book[i].price);
  }
  totalPrice.HTML = total;
} */