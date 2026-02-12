import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import Image from "next/image";
import { notFound } from "next/navigation";
import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
  params: { slug: string };
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = params;

  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound();
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center px-6 tt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="pt24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">Seja Bem Vindo!</h3>
        <p className="opacity-55">
          Explore nosso menu e faça seu pedido online. Começe escolhendo como
          deseja receber:
        </p>
      </div>
      <div className="pt-14 grid grid-cols-2 gap-4">
        <ConsumptionMethodOption
          option="DINE_IN"
          slug={slug}
          buttonText="Para Retirar"
          imageAlt="Retirar"
          imageUrl="/dine-in.png"
        />
        <ConsumptionMethodOption
          option="DELIVERY"
          slug={slug}
          buttonText="Para Entregar"
          imageAlt="Delivery"
          imageUrl="/delivery.png"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
