let listProducts = [
    {
        id: 1,
        name: 'Cosrx Low pH Good Morning Gel Cleanser',
        price: 117000,
        quantity: 0,
        image: "assets/images/cosrxLow.webp",
        nature: {
            color: ['Mùa hè'],
            type: 'Theo mùa'
        }
    },
    {
        id: 2,
        name: 'Thayers Witch Hazel Toner',
        price: 225000,
        quantiy: 30,
        image: "assets/images/toner5.jpg",
        nature: {
            color: ['Mùa hè'],
            type: 'Theo mùa'
        }
    },
    {
        id: 3,
        name: 'The Ordinary Niacinamide 10% + Zinc 1%',
        price: 210000,
        image: "assets/images/TheOrdinaryNiacinamide.jpg",
        nature: {
            color: ['Mùa hè'],
            type: 'Theo mùa'
        }
    },
    {
        id: 4,
        name: 'Biore UV Aqua Rich Watery Essence SPF 50+',
        price: 171000,
        image: "assets/images/Biore UV Aqua Rich Watery Essence SPF 50+.jpeg",
        nature: {
            color: ['Mùa hè'],
            type: 'Theo mùa'
        }
    },
    // combo mua he
    {
        id: 5,
        name: 'Vanicream Gentle Facial Cleanser',
        price: 937000,
        image: "assets/images/Vanicream Gentle Facial Cleanser.jpg",
        nature: {
            color: ['Mùa đông'],
            type: 'Theo mùa'
        } 
    },
    {
        id: 6,
        name: 'Ultra Facial Toner',
        price: 980000,
        image: "assets/images/Ultra Facial Toner.jpeg",
        nature: {
            color: ['Mùa đông'],
            type: 'Theo mùa'
        } 
    },
    {
        id: 7,
        name: 'Cosrx Advanced Snail 96 Mucin Power Essence',
        price: 205600,
        quantity: 0,
        image: "assets/images/Cosrx Advanced Snail 96 Mucin Power Essence.jpeg",
        nature: {
            color: ['Mùa đông'],
            type: 'Theo mùa'
        } 
    },
    {
        id: 8,
        name: 'CeraVe Moisturizing Cream',
        price: 148000,
        image: "assets/images/CeraVe Moisturizing Cream.webp",
        nature: {
            color: ['Mùa đông'],
            type: 'Theo mùa'
        }   
    },
    // combo mùa đông
    {
        id: 9,
        name: 'nnisfree Volcanic Pore Cleansing Foam',
        price: 145000,
        image: "assets/images/nnisfree Volcanic Pore Cleansing Foam.webp",
        nature: {
            color: ['Da dầu'],
            type: 'Theo loại da'
        }
    },
    {
        id: 10,
        name: 'The Ordinary Niacinamide 10% + Zinc 1%',
        price: 210000,
        image: "assets/images/TheOrdinaryNiacinamide.jpg",
        nature: {
            color: ['Da dầu'],
            type: 'Theo loại da'
        }
    },
    {
        id: 11,
        name: 'Clinique Dramatically Different Gel.webp',
        price: 447000,
        image: "assets/images/Clinique Dramatically Different Gel.webp",
        nature: {
            color: ['Da dầu'],
            type: 'Theo loại da'
        }
    },
    // combo da dầu
    {
        id: 12,
        name: 'CeraVe Hydrating Cleanser',
        price: 330000,
        image: "assets/images/ceraVeHydrating.webp",
        nature: {
            color: ['Da khô'],
            type: 'Theo loại da'
        }
    },
    {
        id: 13,
        name: 'Vichy Mineral 89',
        price: 205600,
        image: "assets/images/Vichy Mineral 89.webp",
        nature: {
            color: ['Da khô'],
            type: 'Theo loại da'
        }
    },
    {
        id: 14,
        name: 'First Aid Beauty Ultra Repair Cream',
        price: 300000,
        image: "assets/images/First Aid Beauty Ultra Repair Cream.jpg",
        nature: {
            color: ['Da khô'],
            type: 'Theo loại da'
        }
    },
    // combo da khô
    {
        id: 15,
        name: 'Cetaphil Gentle Cleanser',
        price: 406000,
        image: "assets/images/sua-rua-mat-diu-nhe-cetaphil-gentle-skin-cleanser-500ml.jpg",
        nature: {
            color: ['vp'],
            type: 'work'
        }
    },
    {
        id: 16,
        name: 'Supple Preparation Toner',
        price: 400000,
        image: "assets/images/nuoc-hoa-hong-khong-mui-klairs.jpg",
        nature: {
            color: ['vp'],
            type: 'work'
        }
    },
    {
        id: 17,
        name: 'C E Ferulic ',
        price: 320000,
        image: "assets/images/c-e-ferulic-with-15-l-ascorbic-acid-635494263008-skinceuticals-alt-1.png",
        nature: {
            color: ['vp'],
            type: 'work'
        }
    },
    {
        id: 18,
        name: 'Anessa Perfect UV Sunscreen Skincare Milk SPF 50+',
        price: 242000,
        image: "assets/images/Anessa Perfect UV Sunscreen Skincare Milk SPF 50+.jpg",
        nature: {
            color: ['vp'],
            type: 'work'
        }
    },
    // combo văn phòng
    {
        id: 19,
        name: 'Calendula Deep Cleansing Foaming Face Wash',
        price: 1800000,
        image: "assets/images/Kiehl's Calendula Deep Cleansing Foaming Face Wash.jpeg",
        nature: {
            color: ['nt'],
            type: 'work'
        }
    },
    {
        id: 20,
        name: 'The Body Shop Tea Tree Skin Clearing Mattifying Toner',
        price: 400000,
        image: "assets/images/The Body Shop Tea Tree Skin Clearing Mattifying Toner.jpeg",
        nature: {
            color: ['nt'],
            type: 'work'
        }
    },
    {
        id: 21,
        name: 'Paula’s Choice Calm Redness Relief Repairing Serum',
        price: 920000,
        image: "assets/images/Paula’s Choice Calm Redness Relief Repairing Serum.webp",
        nature: {
            color: ['nt'],
            type: 'work'
        }
    },
    {
        id: 22,
        name: 'Clinique Moisture Surge',
        price: 510000,
        image: "assets/images/Clinique Moisture Surge.jpg",
        nature: {
            color: ['nt'],
            type: 'work'
        }
    },
    {
        id: 23,
        name: 'Shiseido Ultimate Sun Protection SPF 50+',
        price: 780000,
        image: "assets/images/Shiseido Ultimate Sun Protection SPF 50+.jpeg",
        nature: {
            color: ['nt'],
            type: 'work'
        }
    },
    // combo ngoài trời
    {
        id: 24,
        name: 'Simple Kind to Skin Refreshing Facial Wash',
        price: 105000,
        image: "assets/images/Simple Kind to Skin Refreshing Facial Wash.jpeg",
        nature: {
            color: ['20y'],
            type: 'Theo độ tuổi'
        }
    },
    {
        id: 25,
        name: 'The Ordinary Niacinamide 10% + Zinc 1%',
        price: 210000,
        image: "assets/images/TheOrdinaryNiacinamide.jpg",
        nature: {
            color: ['20y'],
            type: 'Theo độ tuổi'
        }
    },
    {
        id: 26,
        name: 'Biore UV Aqua Rich Watery Essence SPF 50+',
        price: 171000,
        image: "assets/images/Biore UV Aqua Rich Watery Essence SPF 50+.jpeg",
        nature: {
            color: ['20y'],
            type: 'Theo độ tuổi'
        }
    },
    // combo dưới 20 tuổi
    {
        id: 27,
        name: 'Skinceuticals Replenishing Cleanser Cream',
        price: 400000,
        image: "assets/images/Skinceuticals Replenishing Cleanser Cream.jpg",
        nature: {
            color: ['30y'],
            type: 'Theo độ tuổi'
        }
    },
    {
        id: 28,
        name: 'Estee Lauder Advanced Night Repair.avif.avif',
        price: 6650000,
        image: "assets/images/Estee Lauder Advanced Night Repair.avif.avif",
        nature: {
            color: ['30y'],
            type: 'Theo độ tuổi'
        }
    },
    {
        id: 29,
        name: 'La Mer Crème de la Mer',
        price: 100000,
        image: "assets/images/La Mer Crème de la Mer.webp",
        nature: {
            color: ['30y'],
            type: 'Theo độ tuổi'
        }
    },
    // combo trên 30 tuổi
    {
        id: 30,
        name: 'CeraVe Hydrating Cleanser',
        price: 330000,
        image: "assets/images/ceraVeHydrating.webp",
        nature: {
            type: 'newbie'
        }
    },
    {
        id: 31,
        name: 'Thayers Witch Hazel Toner',
        price: 225000,
        quantiy: 30,
        image: "assets/images/toner5.jpg",
        nature: {
            type: 'newbie'
        }
    },
    {
        id: 32,
        name: 'The Ordinary Hyaluronic Acid 2%',
        price: 255000,
        image: "assets/images/ordinaryHyaluronic.jpg",
        nature: {
            type: 'newbie'
        }
    },
    {
        id: 33,
        name: 'Neutrogena Hydro Boost Water Gel',
        price: 307000,
        quantiy: 30,
        image: "assets/images/Neutrogena Hydro Boost Water Gel.webp",
        nature: {
            type: 'newbie'
        }
    },
    {
        id: 34,
        name: 'La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 100',
        price: 320000,
        quantiy: 30,
        image: "assets/images/La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 100.jpg",
        nature: {
            type: 'newbie'
        }
    }
    // combo cho người mới bắt đầu
    
];
// hàm lọc
  let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');
    // 
    let productFilter = listProducts;
    showProduct(productFilter);
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.color.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            // if(valueFilter.name.value != ''){
            //     if(!item.name.includes(valueFilter.name.value)){
            //         return false;
            //     }
            // }
            // // check min price
            // if(valueFilter.minPrice.value != ''){
            //     if(item.price < valueFilter.minPrice.value){
            //         return false;
            //     }
            // }
            //  check max price
            // if(valueFilter.maxPrice.value != ''){
            //     if(item.price > valueFilter.maxPrice.value){
            //         return false;
            //     }
            // }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = item.price.toLocaleString() + ' đ';
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }
    