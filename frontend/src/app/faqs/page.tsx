'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function FAQs() {
  const [closedSections, setClosedSections] = useState<Set<string>>(new Set())

  const toggleSection = (section: string) => {
    setClosedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
        // Scroll to the section header when opening
        setTimeout(() => {
          const element = document.getElementById(`section-${section}`)
          if (element) {
            const yOffset = -150
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }, 100)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  const isOpen = (section: string) => {
    return !closedSections.has(section)
  }

  return (
    <div className="privacy-policy-page">
      <div className="privacy-breadcrumb">
        <Link href="/">HOME</Link>
        <span className="separator">&gt;</span>
        <span>FAQ&apos;S</span>
      </div>

      <div className="privacy-container">
        <h1 className="privacy-main-title">Frequently Asked Questions</h1>

        <div className="collapsible-section" id="section-payments">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('payments')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">Payments</h2>
            <span className="toggle-icon">{isOpen('payments') ? '−' : '+'}</span>
          </div>
          {isOpen('payments') && (
            <div className="collapsible-content">
              <p><strong>1. How do I pay for my order?</strong></p>
              <p>
                We have a number of payment methods. Choose the one that is most convenient for you. The options are: Online Bank Transfer through your Credit, Debit, or Cash Card Cash on Delivery (COD)
              </p>
              <p><strong>Do you offer a Cash On Delivery (COD) payment option? How does it work?</strong></p>
              <p>
                Yes, we support the COD payment method. You can make the payment in cash to the delivery agent once the product reaches you.
              </p>
              <p><strong>What should I do if my payment doesn&apos;t get through or fails?</strong></p>
              <p>
                If your payment transaction fails, please contact our Customer Service immediately on 02248931878 or email us at support@indiacircus.com
              </p>
            </div>
          )}
        </div>

        <div className="collapsible-section" id="section-shipping">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('shipping')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">Shipping and Delivery</h2>
            <span className="toggle-icon">{isOpen('shipping') ? '−' : '+'}</span>
          </div>
          {isOpen('shipping') && (
            <div className="collapsible-content">
              <p><strong>1. Do I have to pay shipping charges?</strong></p>
              <p>
                No, you don&apos;t have to pay any shipping charges as the shipping will be free for all the products on indiacircus.com
              </p>
              <p><strong>2. By when will I receive the ordered products?</strong></p>
              <p>
                Delivery will be done within 10-12 working days except for customized products like wallpapers, wall arts which may take up to 20 working days.
              </p>
              <p><strong>3. How do I know whether the product can be delivered to my area? Can I opt for Cash On Delivery (COD) payment in my area?</strong></p>
              <p>
                India Circus is trying its best to ship its products as far and wide as possible. However, there are still a few areas where we are unable to ship. While placing an order, you will receive an intimation of the same. Similarly, you will also be informed on whether or not the Cash On Delivery (COD) payment option is available in your respective area.
              </p>
              <p><strong>4. A few months ago, I had ordered from India Circus and the order was delivered successfully to my address. However, this time, I am unable to place an order as my Pincode is not being recognised. Why so?</strong></p>
              <p>
                There were a few areas and Pincodes that were serviced by India Circus earlier; however, they are unserviceable now due to courier issues. If you are trying to place an order using one of these Pincodes, we won&apos;t be able to take your order. We regret the inconvenience. To place your order successfully, we request you to provide a different/alternate address with a serviceable Pincode. Please get in touch with our Customer Service on 02248931878 to know which Pincodes are serviceable.
              </p>
              <p><strong>5. What is the mode of delivery at India Circus?</strong></p>
              <p>
                We have partnered with Delhivery courier services for the shipment of products across India. Depending upon your location and reach, we also make use of several other trustworthy domestic service providers to deliver products.
              </p>
              <p><strong>6. Why have I received only a part of my order?</strong></p>
              <p>
                As mentioned in our Product details page, each product has its own delivery duration. Please note that, if you have ordered multiple items, the entire order may not be delivered together and you would be receiving partial shipments, as each product may be delivered as per the individual delivery timeline. However we try and send maximum products from your order in one shipment.
              </p>
            </div>
          )}
        </div>

        <div className="collapsible-section" id="section-tracking">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('tracking')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">Order Tracking</h2>
            <span className="toggle-icon">{isOpen('tracking') ? '−' : '+'}</span>
          </div>
          {isOpen('tracking') && (
            <div className="collapsible-content">
              <p><strong>1. How do I know if my order has been placed successfully?</strong></p>
              <p>
                Within a few minutes of successfully placing your order, you will receive an email confirmation from India Circus. This email will include all the important details related to your order. Please do not delete this email, as it, more or less, acts as an order receipt.
              </p>
              <p><strong>2. How do I check the status of my order?</strong></p>
              <p>Simply follow the below-mentioned steps:</p>
              <ul className="privacy-list">
                <li>Click on &apos;Login / Sign Up&apos; on the top left of the page and log in to your account.</li>
                <li>Go to &apos;India Circus&apos; on the top right of the website.</li>
                <li>Click on the &apos;Orders&apos; tab.</li>
                <li>Go to the relevant Order No. and click on it to check its status.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="collapsible-section" id="section-cancellation">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('cancellation')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">Cancellation / Modification</h2>
            <span className="toggle-icon">{isOpen('cancellation') ? '−' : '+'}</span>
          </div>
          {isOpen('cancellation') && (
            <div className="collapsible-content">
              <p><strong>1. Can I cancel an order?</strong></p>
              <p>
                Though the India Circus website itself does not have an option to cancel an order once the payment is made, you can definitely get in touch with our Customer Service on 02248931878 at the earliest (within 24 hours of placing the order) with your Order No. to cancel it. If your order has not been processed, we can cancel the same.
              </p>
              <p><strong>2. Can I modify or change my order?</strong></p>
              <p>
                Our helpful and friendly Customer Service Executives are always at your service in case you want to modify your order; simply call 02248931878. They will also be happy to help you if you want to update your shipping address. Remember to be as quick as possible and contact our Customer Service at the earliest for anything like this.
              </p>
              <p><strong>3. Can I mix and match items from different sets and collections? In other words, can you personalise a set?</strong></p>
              <p>
                Sorry, that&apos;s not possible. We cannot personalise things. The exact set, as shown on the India Circus website, will be delivered to you.
              </p>
              <p><strong>4. How do I contact India Circus&apos; Customer Service Team?</strong></p>
              <p>
                You can get in touch with our Customer Service by sending us an email to support@indiacircus.com or can call us on 02248931878 between 9.30 a.m. and 6 p.m.
              </p>
            </div>
          )}
        </div>

        <div className="collapsible-section" id="section-return-policy">
          <div 
            className="collapsible-header"
            onClick={() => toggleSection('return-policy')}
          >
            <span className="privacy-icon">✤</span>
            <h2 className="collapsible-title">Return Policy</h2>
            <span className="toggle-icon">{isOpen('return-policy') ? '−' : '+'}</span>
          </div>
          {isOpen('return-policy') && (
            <div className="collapsible-content">
              <p><strong>1. What is the Friendly Returns policy of India Circus?</strong></p>
              <p>
                At India Circus, we understand how much you value your every purchase and for us, good customer experience is utmost important. Hence, to fulfil our word, we are committed to making your shopping experience with us as delightful as possible.
              </p>
              <p>
                Even after this if you are not fully satisfied with your purchase, don&apos;t worry as we have an excellent Return policy. The process is pretty simple. All you need to do is raise a return request, within a period of &quot;15 days&quot;, from the date of delivery(48 hours for damaged and defective) following the below steps:
              </p>
              <ul className="privacy-list">
                <li>You can raise a refund request by simply calling or customer care number at 02248931878</li>
                <li>You can also raise a refund by emailing us on our support email id &quot;support@indiacircus.com&quot;.</li>
              </ul>
              <p>
                While you choose any of the above options, we will ensure that you get a resolution at the earliest.
              </p>
              <p>
                At India Circus, we assure you that all products are checked properly before shipping them but even then the product you receive is &quot;Damaged, Defective&quot;, our friendly returns policy will solve your problem.
              </p>
              <p>
                Note: For damaged and defective products, please share the product images along with the packaging images on support@indiacircus.com and our support team will get back to you for your refund processing.
              </p>
              <p><strong>The possible solutions covered in the returns policy are:</strong></p>
              <p><strong>Refund</strong></p>
              <p>
                We have a facility of refund if in case the product delivered is (Damaged, Defective). Refund is not available for dislike in a customised product like wallpapers.
              </p>
              <p><strong>Note</strong></p>
              <p>
                If the order value becomes zero on usage of any gift vouchers or discount coupon codes, for such instances, there will be no refund provided and in return we will reinstate the &quot;Gift Voucher&quot; or &quot;Discount Coupon Code &quot; with the respective amount, which you can use to redeem any other product of your choice from the India Circus website.
              </p>

              <p><strong>2. How do I return an item purchased on India Circus?</strong></p>
              <p>
                Now with our easy returns policy, returning a product is very convenient. If you have received a product which is &quot;Damaged, Defective, or Not as described&quot; and you wish to return the product, you have 15 days to raise a return request by just following the below-mentioned procedures:
              </p>
              <p>
                Note: For damaged and defective products, please share the product images along with the packaging images on support@indiacircus.com and our support team will get back to you for your refund processing.
              </p>
              <p>
                Raise a return request by calling our customer number at 02248931878 or by sending us the return request mail on our customer support email id &quot;support@indiacircus.com &quot;.
              </p>
              <p>
                Once we have received your request, one of our Customer Service Executive will get in touch with you to further understand the issue and will process the request for refund.
              </p>
              <p>
                Ideally, we do a reverse pickup of the product which is &quot;Damaged, Defective, or Not as described (Customer not liking)&quot; from the customer&apos;s place in an unused/undamaged condition with all tags, bills and original packaging intact. We provide a &quot;Refund&quot; of the product amount paid while purchasing.
              </p>
              <p><strong>Note</strong></p>
              <p>
                If the order value becomes zero on usage of any gift vouchers or discount coupon codes, for such instances, there will be no refund provided and in return we will reinstate the &quot;Gift Voucher&quot; or &quot;Discount Coupon Code &quot; with the respective amount, which you can use to redeem any other product of your choice from the India Circus website.
              </p>
              <p><strong>Exceptions</strong></p>
              <p>
                Although we will try our level best to assure you a hassle-free return, there are certain exceptions where it will be difficult to support returns as mentioned below:
              </p>
              <ul className="privacy-list">
                <li>If the return request is made after the specified time frame (15 days from the date of delivery for dislike and 48 hours for damaged and defective).</li>
                <li>Anything missing from the package like the price tag, accessories, labels, original packing, etc.</li>
                <li>Product is damaged due to misuse, physical damage or any other damage done by human error, etc.</li>
                <li>Any customer had requested and placed an order for a Customized product than a refund will be done only if the product is received in a Damaged or Defective condition. There will be no refund for customer dislike. Examples like – Wallart, Wallpaper, etc.</li>
              </ul>

              <p><strong>3. When are returns not possible?</strong></p>
              <p>
                At India Circus, we try our level best to give you the best customer service experience but even though there are certain scenarios where it will be difficult to support returns. The scenarios are as below:
              </p>
              <ul className="privacy-list">
                <li>If the return request is made after the specified time frame (15 days from the date of delivery for dislike and 48 hours for damaged and defective).</li>
                <li>Anything missing from the package like the price tag, accessories, labels, original packing, etc.?</li>
                <li>Product is damaged due to misuse, physical damage done by human error, etc.</li>
                <li>Any customer had requested and placed an order for a Customized product than a refund will be done only if the product is received in a Damaged or Defective condition. There will be no refund for customer dislike. Examples like – Wallart, Wallpaper, etc.</li>
              </ul>

              <p><strong>4. Is there a refund facility available?</strong></p>
              <p>
                Ideally, we would not like our valuable customers to leave unhappy or unsatisfied but even if after all our efforts, a customer is willing to have a refund for his/her order; we do have a facility of refund as per the refund policy.
              </p>

              <p><strong>5. How will I receive my refund / what is the refund policy at India Circus?</strong></p>
              <p>
                Ideally, we would not like our valuable customers to leave unhappy or unsatisfied but even if after all our efforts, a customer is willing to have a refund for his/her order; we do have a facility of refund as per the refund policy described as below:
              </p>
              <p>
                We provide a refund to the customer in case the product delivered is &quot;Damaged, Defective, Dislike &quot;. Customized Products like Wallpaper, etc. will not be covered under refund policy in case of customer dislike. Such products will not be applicable Refund in case of customer dislike.
              </p>
              <p>
                For damaged and defective products, please share the product images along with the packaging images on support@indiacircus.com and our support team will get back to you for your refund processing.
              </p>
              <p>
                Once we get a refund request from your end, we process your refund as per the mode of payment you selected while placing your order which is described below:
              </p>
              <p><strong>Prepaid Order (Credit Card/Debit Card/Net Banking)</strong></p>
              <p>
                In this, the order amount will be remitted back to your card or net-banking account. The process for initiating this takes 1-2 business days however it may take approximately 5-7 business days to get the amount reflect in your card / net-banking account.
              </p>
              <p><strong>Cash On Delivery Order</strong></p>
              <p>
                If you have placed an order using cash on delivery mode and had requested a refund:
              </p>
              <p>
                We take your bank account details along with a copy of the cancelled cheque and we do a bank transfer. In this, the money will get credited in your account within 5-7 working days.
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
