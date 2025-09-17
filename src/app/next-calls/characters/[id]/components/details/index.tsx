import { getCharacterById } from "@/app/actions";

interface DetailsInterface {
  id: string;
}

export async function Details(props: DetailsInterface) {
  const data = await getCharacterById(props.id);

  return (
    <div className="p-[14px] bg-neutral-400 rounded-md w-full max-w-[400px]">
      <img
        src={data.image_url}
        alt={`Thumb nail character ${data.name}`}
        className="object-cover object-top w-full max-h-[200px]"
      />
      <h1>
        Nome: <span className="font-bold">{data.name}</span>
      </h1>
      <p>
        Casa: <span className="font-bold">{data.house}</span>
      </p>
      <p>
        Idade: <span className="font-bold">{data.age}</span>
      </p>
      <p>
        Gênero: <span className="font-bold">{data.gender}</span>
      </p>
      <p>
        Tipo de Bruxo: <span className="font-bold">{data.blood_status}</span>
      </p>
      <p>
        Varinha: <span className="font-bold">{data.wand}</span>
      </p>
      <p>
        Patrono: <span className="font-bold">{data.patrono}</span>
      </p>
    </div>
  );
}
