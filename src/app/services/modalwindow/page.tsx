import Link from 'next/link';

const ModalWindowPage = async () => {
  
  return (
    <div className="container my-7 md:my-14 flex items-center flex-col gap-8 md:gap-14 h-screen h-min">
      <h1>Дякуємо за Вашу довіру нам!</h1>
      <h2>Наш інженер в найкоротший термін звяжеться з Вами</h2>
    <Link href={'/'} key={'головна'}>
        Повернутися на головну сторінку
    </Link>
    </div>
  )
}

export default ModalWindowPage