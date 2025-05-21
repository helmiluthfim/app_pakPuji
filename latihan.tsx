// console.log
console.log("Selamat datang di TypeScript");

// variable
let nama: string = "Helmi Luthfi Mahendra";
let npm: number = 22430115;
let mahasiswa: boolean = true;
console.log(nama)

// function tanpa parameter
function sayHello(): void{
    console.log("Halo, Selamat belajar");
}

sayHello()

// function dengan parameter
function intro(people: string){
    console.log("Hallo, nama saya", people);
}

intro("Helmi");

// function dengan mengembalikan nilai
function sum(a: number, b: number){
    return a + b;
}

console.log("Hasil dari 2 * 5 adalah =", sum(2, 5));

// Array
const buah: string[] = ["Apel", "Jeruk", "Alpukat"];
console.log(buah);

// Class
class Brands {
    merk: string;
    warna: string;
    tahun: number;

    constructor (merk:string, warna: string, tahun: number){
        this.merk = merk;
        this.warna = warna;
        this.tahun = tahun;
    }

    mobil(): void {
        console.log(`Mobil ini adalah ${this.merk} yang berwarna ${this.warna}. Mobil tersebut keluaran pada tahun ${this.tahun}`);
    }
}

const mobil1 = new Brands ("Avanza", "Hitam", 2017);
const mobil2 = new Brands ("Xenia", "Abu - Abu", 2018);

mobil1.mobil();
mobil2.mobil();

// extends
class Smartphone {
    color: string;
    brand: string;
    model: any;

    constructor (color: string, brand: string, model: any){
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    charging(){
        console.log(`${this.model} fast charging`);
    }
}

class iOS extends Smartphone {
    airDrop(){
        console.log(`iOs have a behavior Airdrop`);
    }
}

class Android extends Smartphone {
    splitScreen(){
        console.log(`Android a have split screen`);
    }
}

const ios = new iOS ("Black", "Iphone", "16 Pro Max");
const android = new Android ("Silver", "Samsung", "S25 Ultra");

ios.charging();
ios.airDrop();

android.charging();
android.splitScreen();

// Arrow function
const usia = (umur: number): number => umur;

let usiaSekarang = usia(21);
console.log("Usia saya sekarang adalah :", usiaSekarang);

// Object
const user = {
    id: "122",
    username: "helmimahendra",
    email: "helmimahendra123@gmail.com",
    password: "belajar",
}

console.log(user.username);

// interface
interface Absen {
    npm: number;
    nama: string;
}

const absen: Absen = {
    npm: 22430115,
    nama: "Helmi Luthfi Mahendra",
}

console.log(absen.nama);

// Module
import { Module } from "./modul";
console.log("Hasil dari Module adalah", Module(5, 10));