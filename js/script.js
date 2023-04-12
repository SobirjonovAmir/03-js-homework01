let cars = [
	{
		id: 1,
		model: "urus",
		company: "lamborgini",
		price: 266000,
		engineForce: 6.5
	},
	{
		id: 2,
		model: "cheron",
		company: "buggatti",
		price: 500000,
		engineForce: 7
	},
	{
		id: 3,
		model: "malibu 2",
		company: "gm",
		price: 33000,
		engineForce: 2.4
	},
	{
		id: 4,
		model: "gentra",
		company: "gm",
		price: 17000,
		engineForce: 1.5
	},
	{
		id: 5,
		model: "gelen vagen",
		company: "mercedes",
		price: 300000,
		engineForce: 4
	},
	{
		id: 6,
		model: "matiz",
		company: "daewoo",
		price: 3000,
		engineForce: 6
	}
]



let ask = prompt("Как вас зовут?");
if (ask) {
	ask = ask[0].toUpperCase() + ask.slice(1).toLowerCase().trim()
	let greeting = confirm(`Привет ${ask}, хотите купить машину ?`)
	if (greeting) {
		let company = []
		cars.filter(item => company.push(item.company))
		let ques = prompt(`Какая марка? \n${[...new Set(company)].join("\n")}`).trim()
		if (company.includes(ques)) {
			let has = []
			cars.forEach(item => {
				if (item.company === ques) {
					has.push(item.model)
				}
			})
			let mark = prompt(`У нас под ${ques} есть: \n${has.join(",\n")}, \nнапишите название модели:`).trim()
			if (has.includes(mark)) {
				cars.forEach(item => {
					if (item.model === mark) {
						let about = confirm(`Характеристики автомобиля: \nМодель: ${item.model}, \nКомпания: ${item.company}, \nЦена: ${item.price}, \nСила двигателя: ${item.engineForce}, \nпокупаете?`)
						if (about) {
							let price = +prompt(`Оплатите ${item.price}$.`).trim()
							if (price === item.price) {
								alert(`Поздравляем вы приобрели ${mark}`)
							} else if (price <= 0) {
								alert("Уходите")
							} else if (price < item.price) {
								let askAgain = +prompt(`вы заплатили ${price}, не достает ещё ${item.price - price}`)
								if (askAgain + price === item.price) {
									alert("Теперь все хорошо");
								} else if (askAgain + price < item.price) {
									alert(`вот ${askAgain + price}, берите свои деньги и уходите`)
								} else if (askAgain + price > item.price) {
									alert(`Ваша сдача ${askAgain + price - item.price}`)
									alert(`Поздравляем вы приобрели ${mark}`)
								}
							} else if (price > item.price) {
								alert(`Ваша сдача ${price - item.price}`)
								alert(`Поздравляем вы приобрели ${mark}`)
							}
						}
					}
				})
			} else {
				alert("не правильно написали!")
			}
		} else {
			alert("У нас нет такой марки!")
		}
	} else {
		alert("До свидания")
	}
}

