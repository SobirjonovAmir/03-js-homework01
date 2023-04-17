//First------------------------------------
let password = 7777;
let tries = 10;

while (tries > 0) {
	let userPassword = +prompt("Введите пароль:");
	if (userPassword === password) {
		alert("Пароль верный!");
		break;
	} else {
		tries--;
		alert(`Неверный пароль. У вас осталось ${tries} попыток.`);
	}
}
if (tries === 0) {
	alert("У вас закончились попытки.");
}






//Second-----------------------------------------
// Раскидать людей в разные массивы в зависимости от их почты
let users = [
	{
		"id": 1,
		"name": "Leanne Graham",
		"username": "Bret",
		"email": "Sincere@april.biz",
		"address": {
			"street": "Kulas Light",
			"suite": "Apt. 556",
			"city": "Gwenborough",
			"zipcode": "92998-3874",
			"geo": {
				"lat": "-37.3159",
				"lng": "81.1496"
			}
		},
		"phone": "1-770-736-8031 x56442",
		"website": "hildegard.org",
		"company": {
			"name": "Romaguera-Crona",
			"catchPhrase": "Multi-layered client-server neural-net",
			"bs": "harness real-time e-markets"
		}
	},
	{
		"id": 2,
		"name": "Ervin Howell",
		"username": "Antonette",
		"email": "Shanna@melissa.tv",
		"address": {
			"street": "Victor Plains",
			"suite": "Suite 879",
			"city": "Wisokyburgh",
			"zipcode": "90566-7771",
			"geo": {
				"lat": "-43.9509",
				"lng": "-34.4618"
			}
		},
		"phone": "010-692-6593 x09125",
		"website": "anastasia.net",
		"company": {
			"name": "Deckow-Crist",
			"catchPhrase": "Proactive didactic contingency",
			"bs": "synergize scalable supply-chains"
		}
	},
	{
		"id": 3,
		"name": "Clementine Bauch",
		"username": "Samantha",
		"email": "Nathan@yesenia.net",
		"address": {
			"street": "Douglas Extension",
			"suite": "Suite 847",
			"city": "McKenziehaven",
			"zipcode": "59590-4157",
			"geo": {
				"lat": "-68.6102",
				"lng": "-47.0653"
			}
		},
		"phone": "1-463-123-4447",
		"website": "ramiro.info",
		"company": {
			"name": "Romaguera-Jacobson",
			"catchPhrase": "Face to face bifurcated interface",
			"bs": "e-enable strategic applications"
		}
	},
	{
		"id": 4,
		"name": "Patricia Lebsack",
		"username": "Karianne",
		"email": "Julianne.OConner@kory.org",
		"address": {
			"street": "Hoeger Mall",
			"suite": "Apt. 692",
			"city": "South Elvis",
			"zipcode": "53919-4257",
			"geo": {
				"lat": "29.4572",
				"lng": "-164.2990"
			}
		},
		"phone": "493-170-9623 x156",
		"website": "kale.biz",
		"company": {
			"name": "Robel-Corkery",
			"catchPhrase": "Multi-tiered zero tolerance productivity",
			"bs": "transition cutting-edge web services"
		}
	},
	{
		"id": 5,
		"name": "Chelsey Dietrich",
		"username": "Kamren",
		"email": "Lucio_Hettinger@annie.ca",
		"address": {
			"street": "Skiles Walks",
			"suite": "Suite 351",
			"city": "Roscoeview",
			"zipcode": "33263",
			"geo": {
				"lat": "-31.8129",
				"lng": "62.5342"
			}
		},
		"phone": "(254)954-1289",
		"website": "demarco.info",
		"company": {
			"name": "Keebler LLC",
			"catchPhrase": "User-centric fault-tolerant solution",
			"bs": "revolutionize end-to-end systems"
		}
	},
	{
		"id": 6,
		"name": "Mrs. Dennis Schulist",
		"username": "Leopoldo_Corkery",
		"email": "Karley_Dach@jasper.info",
		"address": {
			"street": "Norberto Crossing",
			"suite": "Apt. 950",
			"city": "South Christy",
			"zipcode": "23505-1337",
			"geo": {
				"lat": "-71.4197",
				"lng": "71.7478"
			}
		},
		"phone": "1-477-935-8478 x6430",
		"website": "ola.org",
		"company": {
			"name": "Considine-Lockman",
			"catchPhrase": "Synchronised bottom-line interface",
			"bs": "e-enable innovative applications"
		}
	},
	{
		"id": 7,
		"name": "Kurtis Weissnat",
		"username": "Elwyn.Skiles",
		"email": "Telly.Hoeger@billy.biz",
		"address": {
			"street": "Rex Trail",
			"suite": "Suite 280",
			"city": "Howemouth",
			"zipcode": "58804-1099",
			"geo": {
				"lat": "24.8918",
				"lng": "21.8984"
			}
		},
		"phone": "210.067.6132",
		"website": "elvis.io",
		"company": {
			"name": "Johns Group",
			"catchPhrase": "Configurable multimedia task-force",
			"bs": "generate enterprise e-tailers"
		}
	},
	{
		"id": 8,
		"name": "Nicholas Runolfsdottir V",
		"username": "Maxime_Nienow",
		"email": "Sherwood@rosamond.me",
		"address": {
			"street": "Ellsworth Summit",
			"suite": "Suite 729",
			"city": "Aliyaview",
			"zipcode": "45169",
			"geo": {
				"lat": "-14.3990",
				"lng": "-120.7677"
			}
		},
		"phone": "586.493.6943 x140",
		"website": "jacynthe.com",
		"company": {
			"name": "Abernathy Group",
			"catchPhrase": "Implemented secondary concept",
			"bs": "e-enable extensible e-tailers"
		}
	},
	{
		"id": 9,
		"name": "Glenna Reichert",
		"username": "Delphine",
		"email": "Chaim_McDermott@dana.io",
		"address": {
			"street": "Dayna Park",
			"suite": "Suite 449",
			"city": "Bartholomebury",
			"zipcode": "76495-3109",
			"geo": {
				"lat": "24.6463",
				"lng": "-168.8889"
			}
		},
		"phone": "(775)976-6794 x41206",
		"website": "conrad.com",
		"company": {
			"name": "Yost and Sons",
			"catchPhrase": "Switchable contextually-based project",
			"bs": "aggregate real-time technologies"
		}
	},
	{
		"id": 10,
		"name": "Clementina DuBuque",
		"username": "Moriah.Stanton",
		"email": "Rey.Padberg@karina.biz",
		"address": {
			"street": "Kattie Turnpike",
			"suite": "Suite 198",
			"city": "Lebsackbury",
			"zipcode": "31428-2261",
			"geo": {
				"lat": "-38.2386",
				"lng": "57.2232"
			}
		},
		"phone": "024-648-3804",
		"website": "ambrose.net",
		"company": {
			"name": "Hoeger LLC",
			"catchPhrase": "Centralized empowering task-force",
			"bs": "target end-to-end models"
		}
	}
]
let emails = {
	org: [],
	net: [],
	info: []
}
let other = []

for (let user of users) {
	let key = user.email.split(".").at(-1);
	if (emails[key]) {
		emails[key].push(user)
	} else {
		other.push(user)
	}
}

console.log(emails);
console.log(other);




//Third-----------------------------------------
// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
let arr = [
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut au`tem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": false
	},
	{
		"userId": 1,
		"id": 3,
		"title": "fugiat veniam minus",
		"completed": false
	},
	{
		"userId": 1,
		"id": 4,
		"title": "et porro tempora",
		"completed": true,
	},
	{
		"userId": 1,
		"id": 5,
		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
		"completed": false
	},
	{
		"userId": 1,
		"id": 6,
		"title": "qui ullam ratione quibusdam voluptatem quia omnis",
		"completed": false
	},
	{
		"userId": 1,
		"id": 7,
		"title": "illo expedita consequatur quia in",
		"completed": false
	},
	{
		"userId": 1,
		"id": 8,
		"title": "quo adipisci enim quam ut ab",
		"completed": true
	},
	{
		"userId": 1,

		"id": 9,
		"title": "molestiae perspiciatis ipsa",
		"completed": false
	},
	{
		"userId": 1,
		"id": 10,
		"title": "illo est ratione doloremque quia maiores aut",
		"completed": true
	},
]
let a = {
	count: 0,
	arr: []
}

let b = {
	count: 0,
	arr: []
}


for (let item of arr) {
	if (item.completed) {
		a.arr.push(item.title)
		a.count++
	} else {
		b.arr.push(item.title)
		b.count++
	}
}

//for (let i = 0; i < arr.length; i++) {
//	if (arr[i].completed){
//		a.arr.push(arr[i].title)
//		a.count++
//	}else {
//		b.arr.push(arr[i].title)
//		b.count++
//	}
//}
console.log(a);
console.log(b);


























//let cars = [
//	{
//		id: 1,
//		model: "Urus",
//		company: "Lamborghini",
//		price: 235000,
//		engineForce: 4.0,
//		sale: false,
//		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lamborghini_Urus_20180306_Genf_2018.jpg/1200px-Lamborghini_Urus_20180306_Genf_2018.jpg?20180312222130"
//	},
//	{
//		id: 2,
//		model: "Chiron",
//		company: "Bugatti",
//		price: 3300000,
//		engineForce: 8.0,
//		sale: true,
//		img: "https://avatars.mds.yandex.net/get-vertis-journal/3911415/cd5424c278fe9c870a2c49c372a1d73d9b1fb48e.jpg_1662012743985/orig"
//	},
//	{
//		id: 3,
//		model: "Malibu 2",
//		company: "Chevrolet",
//		price: 34850,
//		engineForce: 2.4,
//		sale: false,
//		img: "https://frankfurt.apollo.olxcdn.com/v1/files/oyw45yhpm1we3-UZ/image"
//	},
//	{
//		id: 4,
//		model: "Gentra",
//		company: "Chevrolet",
//		price: 17000,
//		engineForce: 1.5,
//		sale: true,
//		img: "https://repost.uz/storage/uploads/24464992-1642658506-mursyaev-post-material.png"
//	},
//	{
//		id: 5,
//		model: "Gelenvagen",
//		company: "Mercedes",
//		price: 300000,
//		engineForce: 6.0,
//		sale: false,
//		img: "https://www.allcarz.ru/wp-content/uploads/2022/01/foto-g-wagon-2021-sale_01.jpg"
//	},
//	{
//		id: 6,
//		model: "Matiz",
//		company: "Daewoo",
//		price: 3000,
//		engineForce: 1.2,
//		sale: true,
//		img: "https://avatars.mds.yandex.net/i?id=4439ca33e5cb34f892c7dbd47598d1a40c7e7ad6-8762941-images-thumbs&n=13"
//	},
//	{
//		id: 7,
//		model: "Vulcan",
//		company: "Aston Martin",
//		price: 2300000,
//		engineForce: 7.0,
//		sale: false,
//		img: "https://www.supervettura.com/blobs/Cars/59/ac1bf35f-7cc1-4d88-891f-c8e2f57f25aa.jpg?width=1920&height=1080&mode=crop"
//	}
//]

//cars.forEach((car) => {
//	let engine = car.engineForce * 100 / 8.4
//	document.write(`
//	<div class="cars">
//		<div class="car-img">
//			<img src="${car.img}" alt="there was an image of car">
//		</div>
//		<div class="about">
//			Company: ${car.company} <br>
//			Model: ${car.model} <br>
//			Price: ${car.price}$ <br>
//			${car.sale === true ? `<b class="sale">SALE</b>` : ''}
//		</div>
//		<div class="engine" >
//			<div class="absolut">Engine capacity: ${car.engineForce}L</div>
//			<div class="fill" style="width: ${engine}%"></div>
//		</div>
//	</div>
//	`)
//})

//// Метод перебора
//function peresbor() {
//	let a = 0;
//	let b = 1;
//	let h = 0.0001;
//	let x = a;
//	while (x < b) {
//		if (Math.abs(x - Math.cos(2 * x)) < h) {
//			console.log(x);
//		}
//		x += h;
//	}
//}

//// Метод касательных (метод Ньютона)
//function kasatelnaya() {
//	let x0 = 0.5;
//	let eps = 0.0001;
//	let f = function (x) { return x - Math.cos(2 * x); };
//	let df = function (x) { return 1 + 2 * Math.sin(2 * x); };
//	let x1 = x0 - f(x0) / df(x0);
//	while (Math.abs(x1 - x0) > eps) {
//		x0 = x1;
//		x1 = x0 - f(x0) / df(x0);
//	}
//	console.log(x1);
//}

//function f(x) {
//	return x * x * Math.exp(-x);
//}

//function integralRect(a, b, h) {
//	let n = (b - a) / h;
//	let sum = 0;
//	for (let i = 0; i < n; i++) {
//		sum += f(a + i * h);
//	}
//	return sum * h;
//}

//console.log(integralRect(0, 1, 0.1));

//function polynomial(x) {
//	return 3 * x * x + 2 * x + 1;
//}

//console.log(polynomial(2));
//function insertionSort(arr) {
//	for (let i = 1; i < arr.length; i++) {
//		let current = arr[i];
//		let j = i - 1;
//		while (j >= 0 && arr[j] > current) {
//			arr[j + 1] = arr[j];
//			j--;
//		}
//		arr[j + 1] = current;
//	}
//	return arr;
//}

//console.log(insertionSort([3, 2, 1, 4, 5]));



//function max_min_matrix(a, col, row, b) {
//	let max = a[0][0];
//	let min = a[0][0];
//	for (let i = 0; i < row; i++) {
//		for (let j = 0; j < col; j++) {
//			if (a[i][j] > max) {
//				max = a[i][j];
//			}
//			if (a[i][j] < min) {
//				min = a[i][j];
//			}
//		}
//	}
//	if (b) {
//		return max;
//	} else {
//		return min;
//	}
//}

//let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//let max = max_min_matrix(arr, 3, 3, true);
//let min = max_min_matrix(arr, 3, 3, false);
//console.log("Maximum element: " + max);
//console.log("Minimum element: " + min);



//function matrixBubbleSort(sortMatrix) {
//	let temp;
//	for (let i = 0; i < sortMatrix.length; i++) {
//		for (let j = 0; j < sortMatrix[i].length - 1; j++) {
//			if (sortMatrix[i][j] > sortMatrix[i][j + 1]) {
//				temp = sortMatrix[i][j];
//				sortMatrix[i][j] = sortMatrix[i][j + 1];
//				sortMatrix[i][j + 1] = temp;
//			}
//		}
//	}
//}

//let sortMatrix = [
//	[8, 3, 5],
//	[1, 4, 6],
//	[9, 7, 2]
//];

//matrixBubbleSort(sortMatrix);

////Вывод отсортированного двумерного массива:
//for (let i = 0; i < sortMatrix.length; i++) {
//	for (let j = 0; j < sortMatrix[i].length; j++) {
//		console.log(sortMatrix[i][j] + " ");
//	}
//	console.log();
//}

//function selectionSort(arr) {
//	let n = arr.length;
//	for (let i = 0; i < n; i++) {
//		let min = i;
//		for (let j = i + 1; j < n; j++) {
//			if (arr[j] < arr[min]) {
//				min = j;
//			}
//		}
//		if (min != i) {
//			let tmp = arr[i];
//			arr[i] = arr[min];
//			arr[min] = tmp;
//		}
//	}
//}

//let sortArr = [12, 6, 4, 1, 15, 10];
//selectionSort(sortArr);
//for (let i = 0; i < sortArr.length; i++) {
//	console.log(sortArr[i]);
//}