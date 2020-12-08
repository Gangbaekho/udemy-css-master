
// querySelectorAll 을 하면은 array를 리턴한다.
// 왜냐하면 같은 클래스 네임을 쓰는 경우가 많을테니까.
const backdrop = document.querySelector('.backdrop')

backdrop.style.display = 'block'

// console.dir(backdrop) 을 하면은 object를 access 할 수 있다.
// 특징은 javascript로 style을 건들게 되면은 inline style로 건들게 되는 것임으로
// 우선순위가 가장 높을 테니까 그 정도만 신경을 써주면 되겠다.
