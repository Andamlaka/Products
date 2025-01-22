import axios from "axios";
import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

async function fetchProducts() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product: any) => (
          <div key={product.id} className=" flex flex-col justify-center items-center border rounded-lg  shadow-xl ">
            <Link href={`/Product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="h-auto  rounded-t-lg"
              />
            </Link>
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link href={`/Product/${product.id}`}>
              <button type="button" className="mt-4 w-40 bg-blue-500 py-2 rounded text-white">
                View Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

