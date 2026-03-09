'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ReturnPolicy() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    const newState = openSection === section ? null : section
    setOpenSection(newState)
    
    // Scroll to the section header when opening
    if (newState === section) {
      setTimeout(() => {
        const element = document.getElementById(`section-${section}`)
        if (element) {
          const yOffset = -150 // Offset for fixed header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="return-policy-page">
      <div className="privacy-breadcrumb">
        <Link href="/">HOME</Link>
        <span className="separator">&gt;</span>
        <span>RETURN POLICY</span>
      </div>

      <div className="privacy-container">
        <h1 className="privacy-main-title">Return, Refund & Cancellation Policy</h1>

        <div className="return-steps-container">
          <div className="return-steps-left">
            <div className="return-badge">
              <img src="/images/peacock-img.png" alt="Return Policy" />
            </div>
          </div>
          <div className="return-steps-right">
            <div className="return-step">
              <div className="step-icon">📦</div>
              <h3 className="step-title">1.Initiate A Return</h3>
              <p className="step-description">
                To initiate a return get in touch with our customer service team on 02248931878<br />
                Or Email us at support@indiacircus.com
              </p>
            </div>
            <div className="return-step">
              <div className="step-icon">🚚</div>
              <h3 className="step-title">2.Pick Up</h3>
              <p className="step-description">
                Once your return is initiated, our excutive will come and collect the products.<br />
                That&apos;s it! Your work is done !!.
              </p>
            </div>
          </div>
        </div>

        <div className="privacy-section">
          <h2 className="privacy-section-title">
            <span className="privacy-icon">✤</span> How do I return an item purchased on India Circus?
          </h2>
          <div className="privacy-content">
              <p>
                Now with our easy returns policy, returning a product is very convenient. If you have received a product which is &quot;Damaged, Defective, or Not as described&quot; and you wish to return the product, you have 15 days (48 hours for damaged and defective) to raise a return request by just following the below mentioned procedures:
              </p>
              <p>
                Raise a return request by calling our customer number at 02248931878 or by sending us the return request mail on our customer support email id &quot;support@indiacircus.com &quot;.
              </p>
              <p>
                Once we have received your request, one of our Customer Service Executive will get in touch with you to further understand the issue and will process the request for refund.
              </p>
              <p>
                We do a reverse pickup of the product which is &quot;Damaged, Defective, or Not as described (Customer not liking)&quot; from the customer&apos;s place in an unused/undamaged condition with all tags, bills and original packaging intact.
              </p>
              <p>
                Note: For damaged and defective products, please share the product images along with the packaging images on support@indiacircus.com and our support team will get back to you for your refund processing.
              </p>
              <p>
                Once the QC is done, you will receive a &quot;Refund&quot; of the product amount paid while purchasing.
              </p>
              <p><strong>Exceptions:</strong></p>
              <p>
                Although we will try our level best to assure you a hassle free return, there are certain exceptions where it will be difficult to support returns as mentioned below:
              </p>
              <ul className="privacy-list">
                <li>If the return request is made after the specified time frame (15 days from the date of delivery for dislike and -48 hours for damaged and defective).</li>
                <li>Anything missing from the package like the price tag, accessories, labels, original packing, etc.</li>
                <li>Product is damaged due to misuse, physical damage or any other damage done by human error, etc.</li>
                <li>Any customer had requested and placed an order for Customized product, than refund will be done only if the product is received in a Damaged or Defective condition. There will be no refund for customer dislike. Examples like – Wallart, Wallpaper, etc.</li>
              </ul>
          </div>
        </div>

        <div className="collapsible-section" id="section-not-possible">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('not-possible')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">When are returns not possible?</h2>
            <span className="toggle-icon">{openSection === 'not-possible' ? '−' : '+'}</span>
          </div>
          {openSection === 'not-possible' && (
            <div className="collapsible-content">
              <p>
                At India Circus, we try our level best to give you the best customer service experience but even though there are certain scenarios where it will be difficult to support returns. The scenarios are as below:
              </p>
              <ul className="privacy-list">
                <li>If the return request is made after the specified time frame (15 days from the date of delivery for dislike. 48 hours for damaged and defective).</li>
                <li>Anything missing from the package like the price tag, accessories, labels, original packing, etc.?</li>
                <li>Product is damaged due to misuse, physical damage done by human error, etc.</li>
                <li>Any customer had requested and placed an order for Customized product, than refund will be done only if the product is received in a Damaged or Defective condition. There will be no refund for customer dislike. Examples like – Wallart, Wallpaper, etc.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="collapsible-section" id="section-refund-policy">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('refund-policy')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">How will I receive my refund / what is the refund policy at India Circus?</h2>
            <span className="toggle-icon">{openSection === 'refund-policy' ? '−' : '+'}</span>
          </div>
          {openSection === 'refund-policy' && (
            <div className="collapsible-content">
              <p>
                Ideally, we would not like our valuable customers to leave unhappy or unsatisfied but even if after all our efforts, a customer is willing to have a refund for his/her order; we do have a facility of refund as per the refund policy described as below:
              </p>
              <p>
                We provide a refund to the customer in case the product delivered is &quot;Damaged, Defective, Dislike&quot;.
              </p>
              <p>
                Customized Products like Wallart, Wallpaper, etc. will not be covered under refund policy in case of customer dislike. Such products will not be applicable Refund in case of customer dislike.
              </p>
              <p>
                Once we get a refund request from your end, we process your refund as per the mode of payment you selected while placing your order which is described below:
              </p>
              <p><strong>Prepaid Order (Credit Card/Debit Card/Net Banking)</strong></p>
              <p>
                In this, the order amount will be remitted back to your card or net-banking account. The process for initiating this takes 1-2 business days however it may take approximately 5-7 business days to get the amount actually reflect in your card / net-banking account.
              </p>
              <p><strong>Cash On Delivery Order</strong></p>
              <p>
                If you have placed an order using cash on delivery mode and had requested a refund:
              </p>
              <p>
                We take your bank account details along with a copy of cancelled cheque and we do a bank transfer. In this the money will get credited in your account within 5-7 working days.
              </p>
              <p><strong>Important Note –</strong></p>
              <p>
                If the order value becomes zero on usage of any gift vouchers or discount coupon codes, for such instances, there will be no refund provided and in return we will reinstate the &quot;Gift Voucher&quot; or &quot;Discount Coupon Code &quot; with the respective amount, which you can use to redeem any other product of your choice from the India Circus website.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
