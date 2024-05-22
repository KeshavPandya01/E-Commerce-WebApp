import React from 'react'

const DesciptionBox = () => {
  return (
    <div className="descriptionBox my-[120px] mx-[170px]">
      <div className="navigator flex">
        <div className="navbox flex bg-[#eeeeee] items-center justify-center text--base font-semibold w-[171px] h-[70px] border-[1px solid #d0d0d0] border-solid m-2">
          Desciption
        </div>
        <div className="fade flex bg-[#eeeeee] items-center justify-center text--base font-semibold w-[171px] h-[70px] border-[1px solid #d0d0d0] border-solid bg-[#FBFBFB] text-[#555] m-2">
          Reviews (122)
        </div>
      </div>
      <div className="desciption flex flex-col gap-[25px] border-[1px solid #D0D0D0] p-[48px] pb-[70px]">
        <p>
          An e-commerce website is an online platform that enables businesses to
          sell products or services directly to customers over the internet.
          These websites feature virtual storefronts where users can browse a
          wide range of items, view product details, read reviews, and compare
          prices. Shoppers can add desired items to their virtual cart and
          proceed to checkout, where they can make secure payments using various
          methods such as credit cards, digital wallets, or bank transfers.
          E-commerce websites often provide features like order tracking,
          customer service, and personalized recommendations to enhance the
          shopping experience. They have revolutionized retail by offering
          convenience, accessibility, and a broader market reach.
        </p>
        <p>
          An e-commerce website is an online platform that allows businesses to
          sell products or services directly to customers. Users can browse
          items, read descriptions and reviews, and make purchases using secure
          payment methods. These websites offer convenience and accessibility,
          enabling shopping from anywhere at any time. They also often include
          features like order tracking and personalized recommendations to
          enhance the user experience.
        </p>
      </div>
    </div>
  );
}

export default DesciptionBox
