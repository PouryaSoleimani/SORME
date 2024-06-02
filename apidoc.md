<!--^ برای ثبت نام کاربر -->
متد:post
api:`https://keykavoos-sorme.liara.run/user/Signup`

روش ارسال:
{
    "username": "username",
    "password": "password",
    "email": "email"
}
----------------------------------------------------
<!--^ برای ارسال کد ثبت نام -->
متد:post
api:`https://keykavoos-sorme.liara.run/user/Signup_OTP`

روش ارسال:
{
    "email": "email",
    "OTP":"OTP"
}
----------------------------------------------------
<!-- ^ برای ورود کاربر و ادمین -->
متد:post
api:`https://keykavoos-sorme.liara.run/user/Login`

روش ارسال:
{
    "username": "username",
    "password": "password"
}
----------------------------------------------------
<!-- ^ برای آپدیت پروفایل -->
متد:put
api:`https://keykavoos-sorme.liara.run/user/Updata-Profile`

روش ارسال:
{
    "fullname": "fullname",
    "address": "address",
    "date_Of_Brith":"2024,1,1"
}+token
----------------------------------------------------
<!-- ^ برای تغییر پسورد -->
متد:put
api:`https://keykavoos-sorme.liara.run/user/change-password`

روش ارسال:
{
    "oldPassword": "oldPassword",
    "newPassword": "newPassword",
    "confirmNewPassword": "confirmNewPassword"
}+token
----------------------------------------------------
<!-- ^ برای ارسال در خواست کد فراموشی پسورد -->
متد:get
api:`https://keykavoos-sorme.liara.run/user/get-otp`

روش ارسال:
{
    "username":"username"
}
----------------------------------------------------
<!-- ^ برای ارسال در خواست کد فراموشی پسورد` -->
متد:put
api:`https://keykavoos-sorme.liara.run/user/forget_password`

روش ارسال:
{
    "username": "username",
    "NewPassword": "NewPassword",
    "confirmPassword": "confirmPassword",
    "OTP": "OTP"
}
----------------------------------------------------
<!-- ^ برای گرفتن اطلاعات کاربر -->
متد:get
api:`https://keykavoos-sorme.liara.run/user/get_Profile`
روش ارسال:فقط توکن
-----------------------------------------------------
<!--^ برای آپلود عکس -->
متد:put
api:`https://keykavoos-sorme.liara.run/user/upload-avatar`
روش ارسال:ارسال تکی با پسوند 
"photos"
+token
-----------------------------------------------------
<!--^ برای ارسال کامنت همگانی -->
متد:post
api:`https://keykavoos-sorme.liara.run/user/support`

روش ارسال:{
    "name": "name",
    "email": "email",
    "message": "message"
}
-----------------------------------------------------
<!-- ^ برای ارسال کامنت کاربر -->
متد:post
api:`https://keykavoos-sorme.liara.run/user/support_User`

روش ارسال:{
    "name": "name",
    "email": "email",
    "message": "message"
}+token
-----------------------------------------------------
<!--^ برای حذف کاربر -->
متد:delete
api:`https://keykavoos-sorme.liara.run/Admin/delete_user/:_id`
روش ارسال:Id+token
-----------------------------------------------------
<!--^ برای حذف فروشنده -->
متد:delete
api:`https://keykavoos-sorme.liara.run/Admin/delete_Seller/:_id`
روش ارسال:Id+token
------------------------------------------------------
<!--^ برای گرفتن کل کاربر -->
متد:get
api:`https://keykavoos-sorme.liara.run/Admin/get-user`
روش ارسال:token
------------------------------------------------------
<!--^ برای گرفتن کل پیام های پشتیبانی -->
متد:get
api:`https://keykavoos-sorme.liara.run/Admin/get-support`
روش ارسال:token
------------------------------------------------------
<!--^ برای گرفتن کل فروشنده -->
متد:get
api:`https://keykavoos-sorme.liara.run/Admin/get-seller`
روش ارسال:token
------------------------------------------------------
<!--^ برای ثبت سفارش -->
متد:post
api:`https://keykavoos-sorme.liara.run/Order/Submit-Order`
روش ارسال:{
orderItems: [
            { productId: "productId", qty: 2 },
            { productId: "productId", qty: 2 },
          ],
"address":"address"

}+token
------------------------------------------------------
<!--^ برای گرفتن کل سفارشات -->
متد:get
api:`https://keykavoos-sorme.liara.run/Order/All-Order`
روش ارسال:فقط توکن
------------------------------------------------------
<!--^ برای گرفتن یک سفارش -->
متد:get
api:`https://keykavoos-sorme.liara.run/Order/OneOrder/:_id`
روش ارسال:فقط توکن
------------------------------------------------------
<!--^ برای ثبت محصول -->
متد:post
api:`https://keykavoos-sorme.liara.run/Product/Add-Product`
روش ارسال:{ 
"name":"name",
 "price":"price",
 "description":"description",
 "brand":"brand",
 "Ingredients":"Ingredients",
 "category":"category",
 "size":"size" 
}+token
------------------------------------------------------
<!--^ برای آپلود محصول -->
متد:put
`api:https://keykavoos-sorme.liara.run/Product/Change-Product/:_id`
روش ارسال:{ 
"name":"name",
 "price":"price",
 "description":"description",
 "NutritionFacts":"NutritionFacts",
 "Ingredients":"Ingredients",
 "category":"category"
}+token
------------------------------------------------------
<!--^ برای دریافت کل محصول -->
متد:get
api:`https://keykavoos-sorme.liara.run/Product/all_Product`
روش ارسال:فقط درخواست
-------------------------------------------------------
<!--^ برای دریافت یک محصول -->
متد:get
api:`https://keykavoos-sorme.liara.run/Product/One_Product/:_id`
روش ارسال:فقط درخواست
-------------------------------------------------------
<!--^ برای ثبت کامنت و امتیاز دهی -->
متد:post
api:`https://keykavoos-sorme.liara.run/Product/comment/:_id`
روش ارسال:{ 
"comment":"comment",
 "rating":"rating" 
}+token
--------------------------------------------------------
<!--^ برای آپلود عکس محصول -->
متد:put
api:`https://keykavoos-sorme.liara.run/Product/upload-avatar/:_id`
روش ارسال:ارسال تکی با پسوند 
"photos"
+token
--------------------------------------------------------
<!--^ برای ثبت نام فروشنده -->
متد:post
api:`https://keykavoos-sorme.liara.run/Seller/SignupSeller`
روش ارسال:
{
    "username": "username",
    "password": "password",
    "email": "email"
}
--------------------------------------------------------
<!--^ برای ارسال کد ثبت نام فروشنده -->
متد:post
api:`https://keykavoos-sorme.liara.run/Seller/Signup_OTP`
روش ارسال:
{
    "email": "email",
    "OTP":"OTP"
}
--------------------------------------------------------
<!--^ برای ورود فروشنده -->
متد:post
api:`https://keykavoos-sorme.liara.run/Seller/LoginSeller`
روش ارسال:
{
    "username": "username",
    "password": "password"
}
--------------------------------------------------------
<!--^ برای تغییر پسورد فروشنده -->
متد:put
api:`https://keykavoos-sorme.liara.run/Seller/Change-Password-Seller`
روش ارسال:
{
    "oldPassword": "oldPassword",
    "newPassword": "newPassword",
    "confirmNewPassword": "confirmNewPassword"
}+token
--------------------------------------------------------
<!--^ برای آپدیت پروفایل فروشنده -->
متد:put
api:`https://keykavoos-sorme.liara.run/Seller/Update-profile`
روش ارسال:
{
    "fullname": "fullname",
    "address": "address",
    "date_Of_Brith":"2024,1,1"
}+token
--------------------------------------------------------
<!--^ برای ارسال در خواست کد فراموشی پسورد فروشنده -->
متد:get
api:`https://keykavoos-sorme.liara.run/Seller/get-otp-Seller`
روش ارسال:
{
    "username":"username"
}
--------------------------------------------------------
<!--^ برای ارسال در خواست کد فراموشی پسورد فروشنده -->
متد:put
api:`https://keykavoos-sorme.liara.run/Seller/forget_password-Seller`
روش ارسال:
{
    "username": "username",
    "NewPassword": "NewPassword",
    "confirmPassword": "confirmPassword",
    "OTP": "OTP"
}
--------------------------------------------------------
<!--^ برای گرفتن اطلاعات فروشنده  -->
متد:get
api:`https://keykavoos-sorme.liara.run/Seller/get_Profile`
روش ارسال:فقط توکن
--------------------------------------------------------
<!--^ برای آپلود عکس -->
متد:put
api:`https://keykavoos-sorme.liara.run/Seller/upload-avatar`
روش ارسال:ارسال تکی با پسوند 
"photos"
+token