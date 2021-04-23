const INITIAL_STATE=  [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    linkUrl:'shop/hats'
   
  },
  {
    id: 2,
    title: 'jackets',
    routeName: 'sneakers',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        linkUrl:'shop/jackets'
    
    
 
  },
  {
    id: 3,
    title: 'sneakers',
    routeName: 'jackets',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        linkUrl:'shop/sneakers'
  
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        linkUrl:'shop/womens'
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        linkUrl:'shop/mens'
   
  }
];


const directoryReducer = (state= INITIAL_STATE , action) => {
    
    switch (action.type) {
     
    
        default:
            return state
    }
    
}



export default directoryReducer

