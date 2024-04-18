export function dateFormat(dateString) {
    // Разбираем строку с датой
    const dateParts = dateString.split('-').map(part => parseInt(part, 10));
  
    if (dateParts.length !== 3) {
      throw new Error('Неверный формат даты');
    }
  
    const [day, month, year] = dateParts;
  
    // Определяем названия месяцев
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
  
    // Формируем строку с датой
    const formattedDate = `${day} ${months[month - 1]}`;
  
    return formattedDate;
  }
  