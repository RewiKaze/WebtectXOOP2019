# Special parts (1) 
ในบทเรียนนี้เราจะมาเรียนรู้กันถึงเมธอดต่างๆ ที่ถ้าหากใช้งานเป็นก็จะสามารถทำให้การเขียนโปรแกรมเชิงวัตถุนั้น มองภาพรวมได้ง่ายขึ้น รวมไปถึงจะไปเรียนรู้กันว่า
ตัวดำเนินการ **instance** of คืออะไร? ปิดท้ายด้วยคียเวิร์ดที่สำคัญอีกตัวอย่าง *final* อีกด้วย

## เมธอด toString()
ใช้สำหรับแปลงข้อมูลของแอททริบิวท์ในวัตถุนั้นๆ เป็น String ซึ่งจะต้อง Overridden เมธอด `toString()` จากคลาส Object มาด้วย โดยเมื่อมีการเรียกใช้
วัตถุดังกล่าวจะถูกเรียก `toString()` เองโดยอัตโนมัติ
```java
public class Student{
  private String id;
  private String name;
  public Student (String ID, String n) {
      id = ID;
      name = n;
  } 
  public String toString() {
      return "ID is " + this.id + " Name is " + this.name;
  }
}

public class TestStudent{
    public static void main( String[] args) {
        Student s = new Student("00","Study Planet");
        System.out.println( s.toString() );

    }
}
```
ผลลัพธ์ที่ได้จะออกมาเป็นดังนี้
```java
ID is 00 Name is Study Planet
```
## เมธอด equals()
ใช้สำหรับสร้างเงื่อนไขการเปรียบเทียบ 2 วัตถุว่ามีความคล้ายกันหรือไม่
```java
public class Student{
  private String id;
  private String name;
  public Student (String ID, String n) {
     id = ID;
     name = n;
  } 
  public boolean equals(Student s){ 
    return (this.id.equals(s.id));
  }
}
public class Main{
  public static void main( String[] args) {
    Student s1 = new Student("203", "Tara");
    Student s2 = new Student("203", "Bank");
    System.out.println(s1.equals(s2));
  }
}
```
จากโปรแกรมตัวอย่างจะเห็นได้ว่า เราได้ทำการเปรียบเทียบตัวแปร id ของทั้ง 2 วัตถุด้วยกัน โดยผ่านเมธอด `equals()` ซึ่งตัวเมธอดจะทำการ return ค่าออกมา
เป็น **boolean** นั่นเอง
<br><br>
โดย `s1.equals(s2)` เปรียบเสมือนว่าเป็นการโยนวัตถุ s2 เข้าไปเปรียบเทียบกับ s1 ( เหมือนว่า s1 เป็นตัวตั้ง ) 
* this.id ภายในเมธอด `equals()` จะหมายถึงวัตถุ **s1** 
* s.id จะหมายถึงวัตถุของ **s2**
โดยผลลัพธ์ที่ออกมาได้ก็จะเป็น ดังนี้
```java
true                      // เนื่องจาก id ของทั้ง 2 วัตถุเท่ากัน
```

## ตัวดำเนินการ instance of
เป็นอีกหนึ่งตัวดำเนินการที่ใช้กับอ็อบเจ็กต์และคลาส เพื่อตรวจสอบว่าเป็นอ็อบเจ็กต์ของคลาสนั้นหรือไม่ ซึ่งจะให้ผลลัพธ์เป็นข้อมูลชนิด **boolean**
```java
GradStudent s1 = new GradStudent();
(s1 instanceof GradStudent)             // จะได้ผลลัพธ์ออกมาเป็น true
(s1 instanceof String)                  // ไม่สามารถรันโปรแกรมได้ เนื่องจาก s1 เป็นวัตถุไม่ใช่ตัวแปร String
```
โดยตัวดำเนินการ instance of จะสามารถนำไปใช้ได้หลากหลายรูปแบบ ขึ้นอยู่กับว่าผู้เขียนต้องการจะนำไปประยุกต์กับอะไร เช่น คำสั่ง if-else 
## คีย์เวิร์ด final
คีย์เวิร์ด final สามารถจะใช้ได้กับคลาส เมธอด และตัวแปร โดยถ้าหากอยู่ในตำแหน่งที่ต่างกัน ก็จะมีความหมายที่แตกต่างกัน ได้แก่
* คลาส : ทำให้คลาสอื่นไม่สามารถสืบทอดคลาสนี้ได้
* เมธอด : ไม่สามารถ overridden ได้
* ตัวแปร : เป็นค่าคงที่ โดยกำหนดค่าได้เพียงครั้งเดียวเท่านั้น
```java
final dataType VariableName         // final อยู่ที่ตำแหน่งตัวแปร
```
