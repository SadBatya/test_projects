const obj = {
  name: 'Vladimir',
  surname: 'Skripnik',
  email: 'sadbatya@mail.ru',
  telegram: 'https://t.me/sadbatya'
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`Ключ: ${key}, Значение: ${value}`);
}