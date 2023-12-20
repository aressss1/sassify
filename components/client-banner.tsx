import Image from "next/image";

const ClientBanner = () => {
    const client = [
        {
            name:"slack",
            imgSrc: "/client/c-1.svg"
        },
        {
            name:"airbnb",
            imgSrc: "/client/c-2.svg"
        },
        {
            name:"amazon",
            imgSrc: "/client/c-3.svg"
        },
        {
            name:"google",
            imgSrc: "/client/c-4.svg"
        },
        {
            name:"netflix",
            imgSrc: "/client/c-5.svg"
        },
    ]

    return ( 
        <div className="flex flex-row justify-between lg:px-20 md:px-14 px-4  lg:mt-64 md:mt-16 mt-12 mb-16  " >
            {client.map((client) => (
                <Image
                    key={client.name}
                    src={client.imgSrc}
                    alt={client.name}
                    className="lg:h-12 md:h-8 h-4  "
                />
            ))}
        </div>
     );
}
 
export default ClientBanner;