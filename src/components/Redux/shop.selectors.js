import {createSelector} from 'reselect'

const selectShop=state=>state.shop

export const selectShopCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );


  const COLLECTION_ID_MAP={
      hats:1,
      sneakers:2,
      jackets:3,
      womens:4,
      mens:5
  }

  export const selectCollection=collectionURLParam=>
  createSelector(
      [selectShopCollections],
      collections=>collections.find(
          collection=> collection.id===COLLECTION_ID_MAP[collectionURLParam]
      )
  )