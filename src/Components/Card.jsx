function card() {
  const data = [{
    image: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Amazon Basics", description: "This is a gadget from amazon.Assistant, play songs.",
    inStock: true,
  },
  { image: "https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Daily Objects", description: "This is a toothbrush, a daily object of neccessity ", inStock: true },
  { image: "https://images.unsplash.com/photo-1605784401368-5af1d9d6c4dc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Apple ", description: "This is a Macbook Pro the best laptop money can buy", inStock: false }]
  return (<div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">

    {data.map((ele, index) => (<div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
      <div className="w-full h-32 bg-zinc-300">
        <img className="w-full h-full object-cover" src={ele.image}></img>
      </div>
      <div className="w-full px-3 py-4">
        <h2 className="font-semibold">{ele.name}</h2>
        <p className="text-xs ">{ele.description}</p>
        <button className={`px-2 py-2 mt-4 ${ele.inStock ? 'bg-blue-600' : 'bg-orange-400'}  text-sm rounded-md text-zinc-100 `}>{ele.inStock ? 'In stock' : 'Sold Out'}</button>

      </div>
    </div>))}



  </div>)

}

export default card;

