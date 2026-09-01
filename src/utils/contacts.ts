export interface PhoneContact {
  id: string;
  /** Кому звонить — короткая подпись рядом с номером */
  label: string;
  /** Расшифровка направления */
  hint: string;
  /** Номер в читаемом виде */
  display: string;
  /** Ссылка для звонка */
  href: string;
}

/**
 * Единый список телефонов компании.
 * Порядок важен: в таком виде номера выводятся в шапке, подвале и на контактах.
 */
export const phones: PhoneContact[] = [
  {
    id: "realty",
    label: "Недвижимость",
    hint: "Квартиры и жилые комплексы",
    display: "+7 (705) 501-20-10",
    href: "tel:+77055012010",
  },
  {
    id: "production",
    label: "ЖБИ, спецтехника, ПГС",
    hint: "Продукция завода, ПГС и аренда техники",
    display: "+7 (775) 413-07-70",
    href: "tel:+77754130770",
  },
  {
    id: "general",
    label: "Общий номер",
    hint: "По любым вопросам",
    display: "+7 (775) 707-77-00",
    href: "tel:+77757077700",
  },
];

export const realtyPhone = phones[0];
export const productionPhone = phones[1];
export const generalPhone = phones[2];
