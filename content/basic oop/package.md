# แพคเก็จ ( Package )
เป็นซอฟต์แวร์ที่ช่วยในการจัดการการพัฒนาของโปรแกรมขนาดใหญ่ โดยจะเป็นที่รวมคลาสของภาษาจาวาในหลายๆคลาส ซึ่งอาจแบ่งได้เป็นแพคเก็จ และแพคเก็จย่อย 
รวมไปถึงจะเก็บไว้ในไดเร็กทอรี่ ( Directory ) ซึ่งจะเป็นชื่อของแพคเก็จ 
<br><br>
แพคเก็จจะมีได้เพียงคำสั่งเดียว โดยจะเป็นคำสั่งเเรกของโปรแกรม แต่ถ้าหากไม่มีคำสั่ง package คลาสจะถูกกำหนดไว้ในเเพคเก็จ default
<br><br>
โดยแพคเก็จถูกออกแบบมาเพื่อจัดเก็บคลาสต่างๆ ให้มีความเป็นหมวดหมู่มากขึ้น ซึ่งสามารถทำกันแยกแต่ละคลาสเป็นคลาสย่อยๆได้ จะทำให้การทำงานของโปรแกรมไวขึ้น เนื่องจาก
เรียกใช้เฉพาะคลาสที่ต้องการ ซึ่งแพคเก็จจะมีรูปแบบในการเรียกใช้ดังนี้
```java
package <package_name>[<sub_package_name>];
```
ยกตัวอย่างเช่น ถ้าหากชื่อคลาสของเราชื่อว่า **labExample**
```java
package labExample;
```
ซึ่งเราสามารถทำการเรียกใช้คลาสแพคเก็จโดยการ **import** เข้ามา แต่ทว่าจะอยู่ก่อนหน้าการประกาศคลาส ทำให้สามารถมีคำสั่ง import ได้หลายคำสั่งนั่นเอง
<br><br>
โดยรูปแบบการเรียกใช้ **import** จะเป็นดังนี้
```java
import <package_name>[.<sub_package_name>].<Class_name>;       // import เฉพาะคลาสที่ต้องการใช้ในแพคเก็จ
import <package_name>[.<sub_package_name>].*;                  // import ทุกคลาสในแพคเก็จนั้น
```
