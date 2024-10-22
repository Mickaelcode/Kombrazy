function ItemCard() {
    return(
        <div className="rounded w-72">
            <div className="flex gap-2 p-2">
                <div className="h-9 w-9 bg-black rounded-full">
                </div>
                <div className="">
                    <div className="font-bold">
                        Item title
                    </div>
                    <div className="text-xs">
                        lorem ipsum
                    </div>
                </div>
            </div>
            <div className="h-28 bg-red-400">
            </div>
            <div className="p-2">
                <div className="flex justify-end">
                    <div className="rounded bg-green-300 px-2">status</div>
                </div>
                <div className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum eius dicta. Ab est quasi eius sed consequatur laborum, iste magnam, excepturi iusto voluptate modi aliquid exercitationem sint minus explicabo!</div>
                <div className="flex justify-end mt-2 gap-2">
                    <div className="rounded bg-blue-300 px-2">Edit</div>
                    <div className="rounded bg-red-300 px-2">Delete</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;