import dateFormat from 'dateformat';

export const dateTransform = date => {

    dateFormat.i18n = {
      dayNames: [
        "Нд",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",
        "Неділя",
        "Понеділок",
        "Вівторок",
        "Середа",
        "Четверг",
        "П`ятниця",
        "Субота",
      ],
      monthNames: [
        "Січ",
        "Лют",
        "Бер",
        "Квіт",
        "Трав",
        "Черв",
        "Лип",
        "Серп",
        "Вер",
        "Жовт",
        "Лист",
        "Груд",
        "Січеня",
        "Лютого",
        "Бурезеня",
        "Квітня",
        "Травеня",
        "Червеня",
        "Липеня",
        "Серпеня",
        "Вересеня",
        "Жовтеня",
        "Листопада",
        "Груденя",
      ],
      timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
    }
    return dateFormat(date, 'dddd, d mmmm, yyyy').toString()

}

export const getDayOfWeek = day =>{
  if(day){
    const arr = day.split(', ');
    return arr[0].trim()
  }
  return ''
}

export const getDate = day => {
  if(day){
    const arr = day.split(', ');
    return arr[1].trim()
  }
  return ''
 }
