# คอนสตรัคเตอร์ ( Constructor )
คือ เมธอดที่ชื่อเหมือนกับคลาส ซึ่งใช้กำหนดค่าเริ่มต้นให้กับแอททริบิวท์หรือการทำงานเบื้องต้น 
```java
public class Student{
  protected String id, name;
  protected double gpa;
  
  public Student (){      // defualt constructor
    id = “unknown”;
    name = “unknown”;
    gpa = 0.0;
  } 
  public Student (String id, String name) {
    this.id = id;
    this.name = name;
    this.gpa = 0.0;
  } 
  public Student (String id, String name, double gpa) {
    this.id = id;
    this.name = name;
    this.gpa = gpa;
  }
}
```
และคอนสตัคเตอร์จะถูกเรียกใช้งานเมื่อเราสร้างวัตถุด้วยคำสั่ง `new` ยกตัวอย่างเช่น
```java
Student s1 = new Student();
Student s2 = new Student("204", "Pamnana");
Student s3 = new Student("204", "Pamnana", "99.99");
```
**Default constructor** จะถูกสร้างอัตโนมัติในกรณีที่คลาสนั้นไม่มี constructor แต่**ถ้ามีคอนสตรีคเตอร์อยู่แล้วก็จะไม่ถูกสร้างขึ้นนั่นเอง**
<br><br>
โดยคอนสตรัคเตอร์จะมีหลักการทำงานของคอนสตรัคเตอร์ประกอบไปด้วย 4 ขั้นตอนดังนี้
1. จองพื้นที่หน่วยความจำให้กับวัตถุ
```java
Student s3 = new Student("204", "Pamnana", "99.99");
// จะทำการจองพื้นที่หน่วยความจำใน s3
```
2. กำหนดค่าเริ่มต้นให้กับแอททริบิวท์ของวัตถุ
```java
// ทำการเรียกคอนสตรัคเตอร์มากำหนดค่าเริ่มต้น
id = "unknown";
name = "unknown";
gpa = 0.0;
```
3. กำหนดค่าแอททริบิวท์ของวัตถุตามที่ได้ประกาศไว้
```java
id = "204";
name = "Pamnana";
gpa = 99.99;
```
4. เรียกใช้งานคอนสตรัคเตอร์

