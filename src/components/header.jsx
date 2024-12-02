import React from "react";
import {
  AddToCard,
  Favourite,
  Logo,
  Search,
  Statistic,
  User,
} from "../assets/icons/icons";

const Header = () => {
  return (
    <>
      <div className="border-l-gray-950 w-full">
        <div className="w-[1434px] relative h-[179.25px] top-[48.75px] justify-center left-[277px]">
          <div className="flex">
            <div className="flex w-[450px] justify-between items-center">
              <div>
                <Logo />
              </div>
              <div className="justify-center w-[133px] flex flex-col items-center">
                <div className="active:text-[#000B39] cursor-pointer active:underline">
                  Москва
                </div>
                <div className="font-bold underline text-[#000B39]">
                  это ваш город?
                </div>
              </div>
              <div className="text-[#4D4D4D] font-bold">
                <div className="px-4">8 800 555 35 35</div>
                <div>+ 7 926 700 25 25</div>
              </div>
            </div>
            <div className="flex gap-7 w-[600px] justify-between mx-6 items-center relative top-[-14px] text-[#4D4D4D] font-normal ">
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Помощь
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Информация
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Отзывы
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                О компании
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Новости{" "}
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Контакты
              </div>
            </div>
            <div className="flex w-[250px] justify-between items-center mx-6 relative top-[-10px]">
              <div className="cursor-pointer">
                <Search />
              </div>
              <div className="cursor-pointer">
                <Statistic />
              </div>
              <div className="cursor-pointer">
                <Favourite />
              </div>
              <div className="cursor-pointer">
                <User />
              </div>
            </div>
          </div>
          <div className="flex w-[1300px] justify-between">
            <div className="flex flex-row">
              <div className=" w-[160px]  text-[10px] text-[#4D4D4D] flex justify-center items-center active:text-[#000B39] cursor-pointer active:underline">
                Интернет-магазин оборудование и аксессуры для косметологии.
              </div>
              <div className=" relative left-[125px] items-center flex ">
                <div className="relative items-center flex text-[#4D4D4D] border-2 border-[#000B39] h-[38px] w-[166px] text-center justify-center active:text-[#000B39] cursor-pointer active:underline">
                  Заказать звонок
                </div>
              </div>
            </div>
            <div className="flex w-[550px] relative left-[30px] justify-between items-center  text-[#4C4C4C] font-bold text-[20px] ">
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Каталог
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Аренда
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Бренды
              </div>
              <div className="active:text-[#000B39] cursor-pointer active:underline">
                Обучение
              </div>
            </div>
            <div className="flex relative w-[170px] justify-evenly items-center">
              <div className="cursor-pointer">
                <AddToCard />
              </div>
              <div className="text-[#000B39] text-[18px] font-bold active:text-[#000B39] cursor-pointer active:underline">
                30 000 ₽
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
