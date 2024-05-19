export function dateFormat(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const d = String(date.getDate()).padStart(2, '0');

const dateString = `${y}-${m}-${d}`;
    // Разбираем строку с датой
    const dateParts = dateString.split('-').map(part => parseInt(part, 10));
  
    if (dateParts.length !== 3) {
      throw new Error('Неверный формат даты');
    }
  
    const [year, month, day  ] = dateParts;
  
    // Определяем названия месяцев
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
  
    // Формируем строку с датой
    const formattedDate = `${day} ${months[month - 1]}`;
  
    return formattedDate;
  }
  