import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +88012 3456 7894</label>
            <i className='fa fa-envelope'></i>
            <label> support@marketbin.ca</label>
          </div>
          <div className='right row RText'>
            <label>FAQs</label>
            <label>Need Help?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
