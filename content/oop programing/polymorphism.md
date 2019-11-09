# การมีได้หลากหลายรูปแบบ ( Polymorphism )
ในบทเรียนนี้เราจะมาเรียนรู้เรื่องการมีได้หลากหลายรูปแบบ ซึ่งถือว่าเป็นอีกคุณสมบัติของอ็อบเจ็กต์ของคลาสที่ต่างกันสามารถตอบสนองต่อเมธอดเดียวกันในวิธีการต่างกันได้ เช่น Overloaded, Overridden และการใช้ Dynamic Binding

## Dynamic Binding
คือ ชนิดข้อมูลของตัวแปรชนิดอ้างอิง โดยจะถูกกำหนดก็ต่อเมื่อโปรแกรมประมวลผล( runtime ) ซึ่งเป็นหลักการของการสร้างวัตถุของคลาสที่มีการสิบทอดกันได้หลากหลายรูปแบบ 
```java
Superclass obj;
```
โดยสามารถสร้างได้ 2 แบบได้แก่
```java
obj = new Superclass();       // คลาสนั้นเอง
obj = new Subclass();         // คลาสอื่นๆที่เป็นคลาสลูก
```

## Overloaded
เป็นการทำให้เมธอดที่มีชื่อเหมือนกัน **ภายในคลาสเดียวกัน**มีการทำงาน อินพุท หรือ มีผลลัพธ์ที่แตกต่างกัน เพื่อรองรับอินพุทอย่างหลากหลาย ส่งผลให้เมธอดมีความ
ยืดหยุ่นในการใช้งานมากยิ่งขึ้น ยกตัวอย่างเช่น
```java
public void setDetail ( String ID, String n ) {}
public void setDatail ( String ID, double GPA ) {}
```

## Overridden
เป็นการอนุญาตให้คลาสลูก ( Sublclass ) สามารถเพิ่มเติมการทำงานจำเพาะเช่น เพิ่มโค้ดในเมธอดที่คลาสแม่ ( Superclass ) มีไว้แล้วก็ได้ โดยมีเงื่อนไขดังนี้
* จำนวนและชนิดของ arguement จะต้องเหมือนเดิม
* ชนิดข้อมูลของค่าที่ส่งกลับมาจะต้องเหมือนเดิม
* Access Modifier จะต้องมีระดับไม่ต่ำกว่าเดิม

```java
public class Student{
  protected String id;
  protected String name;
  protected double gpa;

  public void printDetail(){
      System.out.println(“ID ”+id);
      System.out.println(“Name ”+name);
  }
}

public class GradStudent extends Student{
  protected String thesisTitle;
   public String getThesisTitle(){ 
      return this.thesisTitle; 
   }
   public void printDetail(){
      System.out.println(“ID ”+id);
      System.out.println(“Name ”+name);
      System.out.println(“GPA ”+gpa);
      System.out.println(“Title ”+thesisTitle);
   }
}
```
จากโปรแกรมดังกล่าวข้างบน เราจะสามารถสังเกตเห็นได้ว่ามีการทำงานบางส่วนที่**ซ้ำกัน** นั่นก็คือ
```java
System.out.println(“ID ”+id);
System.out.println(“Name ”+name);
```
ทำให้เราสามารถที่จะนำหลักการ **Overridden** มาใช้ได้โดยเปลี่ยนส่วนที่ซ้ำกันในเมธอด `printDetail()` ได้ดังนี้
```java
super.printDetail();
```
ซึ่งเป็นการเรียกใช้เมธอด `printDetail()` จากคลาส Student ได้เนื่องจากเราได้ทำการ **extends** คลาสมาแล้วจ้า ~

## Virtual Method Invocation
โปรแกรมภาษาจาวาจะพิจารณาเรียกใช้เมธอดจากชนิดของอ็อบเจ็กต์ที่สร้างขึ้น แต่**คอมไพเลอร์**ของภาษาจาวาจะ**ไม่อนุญาต**ให้เรียกใช้เมธอดใดๆก็ตามที่ไม่มีการประกาศ
อยู่ในเมธอดของคลาสแม่ ที่กำหนดไว้
```java
Student s1 = new GradStudent();
s1.getThesisTitle();
```
จากตัวอย่างโปรแกรมด้านบนจะไม่สามารถรันโปรแกรมได้เนื่องจากเราไม่ได้ทำการประกาศเมธอด `getThesisTitle()` ไว้ในคลาส Student นั่นเอง
