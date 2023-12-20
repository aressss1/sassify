import Image from "next/image";

const ClientBanner = () => {
    const client = [
        {
            name:"slack",
            // imgSrc: "/client/c-1.png"
            imgSrc: "/client/image 3.svg"
        },
        {
            name:"airbnb",
            imgSrc: "/client/c-2.png"
        },
        {
            name:"amazon",
            imgSrc: "/client/c-3.png"
        },
        {
            name:"google",
            imgSrc: "/client/c-4.png"
        },
        {
            name:"netflix",
            imgSrc: "/client/c-5.png"
        },
    ]

    return ( 
        <div className="flex flex-row justify-between lg:px-20 md:px-14 px-4 h-24 lg:my-56  " >
            {client.map((client) => (
                <Image
                    key={client.name}
                    src={client.imgSrc}
                    alt={client.name}
                    className="h-10 shadow-xl"
                />
            ))}
        </div>
     );
}
 
export default ClientBanner;