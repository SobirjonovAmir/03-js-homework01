let cars = [
	{
		id: 1,
		model: "Urus",
		company: "Lamborghini",
		price: 235000,
		engineForce: 4.0,
		sale: false,
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lamborghini_Urus_20180306_Genf_2018.jpg/1200px-Lamborghini_Urus_20180306_Genf_2018.jpg?20180312222130"
	},
	{
		id: 2,
		model: "Chiron",
		company: "Bugatti",
		price: 3300000,
		engineForce: 8.0,
		sale: true,
		img: "https://avatars.mds.yandex.net/get-vertis-journal/3911415/cd5424c278fe9c870a2c49c372a1d73d9b1fb48e.jpg_1662012743985/orig"
	},
	{
		id: 3,
		model: "Malibu 2",
		company: "Chevrolet",
		price: 34850,
		engineForce: 2.4,
		sale: false,
		img: "https://frankfurt.apollo.olxcdn.com/v1/files/oyw45yhpm1we3-UZ/image"
	},
	{
		id: 4,
		model: "Gentra",
		company: "Chevrolet",
		price: 17000,
		engineForce: 1.5,
		sale: true,
		img: "https://repost.uz/storage/uploads/24464992-1642658506-mursyaev-post-material.png"
	},
	{
		id: 5,
		model: "Gelenvagen",
		company: "Mercedes",
		price: 300000,
		engineForce: 6.0,
		sale: false,
		img: "https://www.allcarz.ru/wp-content/uploads/2022/01/foto-g-wagon-2021-sale_01.jpg"
	},
	{
		id: 6,
		model: "Matiz",
		company: "Daewoo",
		price: 3000,
		engineForce: 1.2,
		sale: true,
		img: "https://avatars.mds.yandex.net/i?id=4439ca33e5cb34f892c7dbd47598d1a40c7e7ad6-8762941-images-thumbs&n=13"
	},
	{
		id: 7,
		model: "Vulcan",
		company: "Aston Martin",
		price: 2300000,
		engineForce: 7.0,
		sale: false,
		img: "https://www.supervettura.com/blobs/Cars/59/ac1bf35f-7cc1-4d88-891f-c8e2f57f25aa.jpg?width=1920&height=1080&mode=crop"
	}
]

cars.forEach((car) => {
	let engine = car.engineForce * 100 / 8.4
	document.write(`
	<div class="cars">
		<div class="car-img">
			<img src="${car.img}" alt="there was an image of car">
		</div>
		<div class="about">
			Company: ${car.company} <br>
			Model: ${car.model} <br>
			Price: ${car.price}$ <br>
			${car.sale === true ? `<b class="sale">SALE</b>` : ''}
		</div>
		<div class="engine" >
			<div class="absolut">Engine capacity: ${car.engineForce}L</div>
			<div class="fill" style="width: ${engine}%"></div>
		</div>
	</div>
	`)
})
















//let max = cars.reduce((maxCar, car) => car.price > maxCar.price ? car : maxCar);
//let min = cars.reduce((minCar, car) => car.price < minCar.price ? car : minCar);
//console.log(max);
//console.log(min);

//let ask = prompt("Как вас зовут?");
//if (ask) {
//	ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase().trim()
//	let greeting = confirm(`Привет ${ask}, хотите купить машину ?`)
//	if (greeting) {
//		let company = []
//		cars.filter(item => company.push(item.company))
//		let ques = prompt(`Какая марка? \n${[...new Set(company)].join("\n")}`).trim()
//		if (company.includes(ques)) {
//			let has = []
//			cars.forEach(item => {
//				if (item.company === ques) {
//					has.push(item.model)
//				}
//			})
//			let mark = prompt(`У нас под ${ques} есть: \n${has.join(",\n")}, \nнапишите название модели:`).trim()
//			if (has.includes(mark)) {
//				cars.forEach(item => {
//					if (item.model === mark) {
//						let about = confirm(`Характеристики автомобиля: \nМодель: ${item.model}, \nКомпания: ${item.company}, \nЦена: ${item.price}, \nСила двигателя: ${item.engineForce}, \nпокупаете?`)
//						if (about) {
//							let price = +prompt(`Оплатите ${item.price}$.`).trim()
//							if (price === item.price) {
//								alert(`Поздравляем вы приобрели ${mark}`)
//							} else if (price <= 0) {
//								alert("Уходите")
//							} else if (price < item.price) {
//								let askAgain = +prompt(`вы заплатили ${price}, не достает ещё ${item.price - price}`)
//								if (askAgain + price === item.price) {
//									alert("Теперь все хорошо");
//								} else if (askAgain + price < item.price) {
//									alert(`вот ${askAgain + price}, берите свои деньги и уходите`)
//								} else if (askAgain + price > item.price) {
//									alert(`Ваша сдача ${askAgain + price - item.price}`)
//									alert(`Поздравляем вы приобрели ${mark}`)
//								}
//							} else if (price > item.price) {
//								alert(`Ваша сдача ${price - item.price}`)
//								alert(`Поздравляем вы приобрели ${mark}`)
//							}
//						}
//					}
//				})
//			} else {
//				alert("не правильно написали!")
//			}
//		} else {
//			alert("У нас нет такой марки!")
//		}
//	} else {
//		alert("До свидания")
//	}
//}

