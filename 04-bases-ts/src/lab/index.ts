const main = () => {




    //* PRODUCT
    interface ProductProps {
        name:string
        description:string
        category?:string
        cost:number
        discount?:number
    }

    interface Product extends ProductProps {
        greeting: () => string
    }




    //* CREATOR
    abstract class Creator {
        product = null as unknown as Product

        public abstract factoryMethod(props:ProductProps):Product

        public start(props:ProductProps) {
            this.product = this.factoryMethod(props)

            console.log(this.product.greeting())

            return this.product;
        }
    }




    //* CONCRETE PRODUCTS
    class PhoneProduct implements Product {
        public name:string
        public cost:number
        public category:string
        public discount:number
        public description:string

        constructor(phoneProps:ProductProps) {
            const { name, cost, category, description, discount } = phoneProps

            this.name = name;
            this.cost = cost
            this.category = category!
            this.description = description
            this.discount = discount || 0
        }

        greeting():string {
            return `Ur phone is ${this.name}`
        }
    }




    //* CONCRETE CREATORS
    class PhoneCreator extends Creator {
        public factoryMethod(phoneProps:ProductProps):Product {
            const phoneProduct = new PhoneProduct({
                ...phoneProps,
                category: 'Phone'
            })

            return phoneProduct
        }
    }




    //* CLIENT CODE
    const clientCode = <T extends Creator>(CreatorClass: new () => T, productProps:ProductProps) => {
        // I'm not interested in which Creator arrive
        const creatorInstance = new CreatorClass()
        const product:Product = creatorInstance.start(productProps)
        console.log('Product', product)
    }



    //* INSTANCES
    clientCode(PhoneCreator, { // Improve this
        name: 'CatBerry',
        description: 'Great phone',
        cost: 1210,
    })

    clientCode(PhoneCreator, { // Improve this
        name: 'DogBerry',
        description: 'Great phone',
        cost: 1100,
    })


    
    // TODO: NEW EXAMPLES
    // TODO: UNDERSTAND AGAIN THE CODE
    // TODO: ADD COMMENTS


}

export default main;
