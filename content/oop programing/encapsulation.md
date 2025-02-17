# การห่อหุ้ม ( Encapsulation )
สำหรับการห่อหุ้มนั้นมีความหมายที่หลากหลายด้วยกัน เช่น ในเชิงเน็ตเวิร์ก ในเชิงการเขียนโปรแกรมเชิงวัตถุ ซึ่งในบทเรียนนี้ การห่อหุ้มจะเป็นกระบวนการปกปิดโค้ดและข้อมูล 
จากการเข้าถึงจากภายนอกหรือโปรแกรมอื่นๆ ( Data-hiding )
<br><br>
โดยการห่อหุ้มนั้นสามารถป้องกันวัตถุอื่นๆที่อาจจะเข้ามาทำลายวัตถุบางอย่างได้ ซึ่งการห่อหุ้มนั้นจะมีความยืดหยุ่นสูง เนื่องจากสามารถที่จะเปลี่ยนแปลงชนิดของตัวแปรได้โดยไม่กระทบคลาสอื่น
<br><br>
สามารถห่อหุ้มได้โดยการกำหนดให้ทุกแอททริบิวท์เป็น **private** และทำการสร้างเมธอดเพื่อใช้ในการเข้าถึงเป็น public โดยเมธอดเหล่านั้นจะเรียกว่า **set และ get**

## Modifier
คือ ตัวกำหนดขอบเขตและสิทธิในการเข้าถึงคลาส แอททริบิวท์ และเมธอด โดยสามารถแบ่งได้ทั้งหมด 4 ประเภท ได้แก่
1. public : **ทุกคลาส**สามารถเข้าถึงและเรียกใช้งานได้
2. private : **ภายในคลาสเท่านั้น**ที่สามารถเข้าถึงและเรียกใช้งานได้
3. protected : **คลาสแม่ลูก**กันเท่านั้นที่สามารถเข้าถึงและเรียกใช้งานได้
4. default : **ทุกคลาสภายใน package** เดียวกันที่สามารถเข้าถึงและเรียกใช้งานได้

```java
public class Rectangle {
  private double width;
  private double height;
  public double getArea() {
    return width * height;
  }
}

public class TestPrivate {
  public static void main( String[] args) {
      Rectangle rect = new Rectangle();
      rect.width = 10;
    }
}
```
จากตัวอย่างข้างต้นจะแสดงให้เห็นถึงการเรียกใช้คลาส _Rectangle_ แต่ทว่าผลลัพธ์ที่ได้จะออกมาเป็น ดังนี้
```java
TestPrivate.java:5: width has private access in Rectangle
```
เนื่องจาก การเรียกใช้ `rect.width = 10;` เป็นการเรียกใช้ตัวแปร `width` ซึ่งมีข้อแม้ว่า Modifier ของตัวแปร width นั้นเป็นตัวกำหนดขอบเขตสิทธิประเภท **private**
ทำให้ไม่สามารถที่จะเรียกใช้ข้ามระหว่างคลาสได้
<br><br>
ซึ่งวิธีแก้ก็สามารถทำได้หลายแบบ แต่ในบทเรียนนี้เราจะมาสอนวิธีการใช้**เมธอดแบบ accesstor** กัน!
## Method ( set/get )
เมธอดแบบ accesstor สามารถแบ่งออกได้เป็น 2 ประเภทได้แก่ เมธอดแบบ setter และเมธอดแบบ getter
### setter :
กำหนดค่าของคุณลักษณะ มักจะขึ้นต้นด้วยคำว่า set แล้วตามด้วยชื่อของคุณลักษณะ
```java
   public void setAttributeName(dataType arg) {
      attributeName = arg;
   }
```
### getter :
เรียกค่าของคุณลักษณะ มักจะขึ้นต้นด้วยคำว่า set แล้วตามด้วยชื่อของคุณลักษณะ
```java
  public dataType getAttributeName() {
      return attributeName;
  }
```
