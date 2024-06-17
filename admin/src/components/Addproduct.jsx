import upload_area from '../assets/upload_area.svg'

const Addproduct = () => {
  return (
    <div className="add-product box-border w-[100%] max-w-[800px] py-[30px] px-[50px] my-[20px] mx-[30px] rounded-md bg-white">
      <div className="itemfield w-[100%] text-[#7b7b7b] text-base ">
        <p>product Title</p>
        <input className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px solid #c3c3c3] outline-none text-[#7b7b7b] text-Poppins' type="text" name="name" placeholder="Type here" />
      </div>
      <div className="price">
        <div className="itemfield w-[100%] text-[#7b7b7b] text-base">
          <p>Price</p>
          <input className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px solid #c3c3c3] outline-none text-[#7b7b7b] text-Poppins' type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="itemfield w-[100%] text-[#7b7b7b] text-base">
          <p>Offer Price</p>
          <input className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px] border-[1px solid #c3c3c3] outline-none text-[#7b7b7b] text-Poppins' type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="itemfield w-[100%] text-[#7b7b7b] text-base">
        <p>Product Category</p>
        <select name="category" className="selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="itemfield w-[100%] text-[#7b7b7b] text-base">
        <label htmlFor="file-input">
          <img src={upload_area} className="thumnail-img" alt="" />
        </label>
        <input type="file" name="image" id="file-input" hidden />
      </div>
      <button className="btn">ADD</button>
    </div>
  );
}

export default Addproduct
