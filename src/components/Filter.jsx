import React from 'react'

const Filter = (props) => {

     return (
          <div className="filter">
               <div className="result">
                    تعداد محصولات :  {props.count} محصول
               </div>
               <div className="sort">
                    <div className="sort-title">مرتب سازی بر اساس</div>
                    <div className="form-checkbox">
                         <div className="form-group">
                              <input type="radio" value="asc" name='radiovalues' onChange={props.sortProducts} />
                              <label htmlFor="">جدیدترین محصولات</label>
                         </div>
                         <div className="form-group">
                              <input type="radio" value="desc" name='radiovalues' onChange={props.sortProducts} />
                              <label htmlFor="">قدیمی ترین محصولات</label>
                         </div>
                    </div>
               </div>
               <div className="brand">
                    برندها
                    <select value={props.brand} onChange={props.filterProducts}>
                         <option value="">همه</option>
                         <option value="samsung">سامسونگ</option>
                         <option value="iphone">آیفون</option>
                         <option value="motorola">موتورولا</option>
                         <option value="blackberry">بلک بری</option>
                         <option value="lg">ال جی</option>
                         <option value="sony">سونی</option>
                    </select>
               </div>
          </div>
     )
}

export default Filter
