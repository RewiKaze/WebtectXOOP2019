# การสืบทอด ( Inheritance )
เป็นกระบวนการภายในคลาสใหม่ที่ได้มาจากคลาสที่มีอยู่แล้ว ในภาษาจาวาคลาสอาจจะได้แอททริบิวท์หรือเมธอด มาจากคลาสอื่นๆ 
* คลาสที่ได้รับแอททริบิวท์หรือเมธอดมาจากคลาสอื่นจะเรียกว่า คลาสลูก ( subclass )
* คลาสที่ถูกสืบทอดจะเรียกว่า คลาสแม่ ( superclass )

โดยทั่วไปแล้วคลาสลูกจะสามารถสืบทอดมาจากคลาสแม่เพียงคลาสเดียว แต่ว่าคลาสแม่จะสามารถมีลูกมาสืบทอดกี่คนก็ได้ ซึ่งถ้าไม่มีการสืบทอดใดๆเกิดขึ้น จาวาจะกำหนดคลาส Object 
ให้เป็นคลาสแม่ทันที
<br><br>
ซึ่งมีข้อแม้ว่าถ้าหากต้องการที่จะทำการสืบทอดคลาสแม่เข้ามาในคลาสลูก จะต้องทำการ **extends** ก่อน
```java
public class Animal {
  private String size;
  private int age;
  private String color;
  
  public void sit(){…}
  public void sleep(){…}
 }

public class Dog extends Animal{
  private String breed;
  
  public void bark(){…}
  public void run(){…}
}
```
จากตัวอย่างขั้นต้นนั้นจะทำให้คลาส Dog ของเรานั้นสามารถเรียกใช้คลาส Animal โดยทั้งสองคลาสจะเป็นคลาสแม่-ลูกกันนั่นเอง!
<br><br>
แต่ถ้าหากมีการสืบทอดมากกว่าหนึ่งคลาส และคลาสทั้งสองมีการสืบทอดมาจากคลาสเดียวกันและเกิดการ Overridden จะทำให้เกิดปัญหา “Diamond Problem”
<br><br>
ซึ่งการสืบทอดสามารถลดปริมาณโค้ดที่มีความซ้ำซ้อนกันลง โดยการแชร์โค้ดหรือทรัพยากรในส่วนที่ใช้ร่วมกันกับคลาสลูกทั้งหลาย 
นอกจากนี้ เทคนิคการสืบทอดยังช่วยให้โปรแกรมของเรามีความยืดหยุ่นต่อการเปลี่ยนแปลง

## วิธีการออกแบบการสืบทอด
สามารถแบ่งการออกแบบได้ทั้งหมด 2 ประเภทได้แก่
1. Top-Down คือ การมองจากบนคลาสแม่ก่อน
2. Bottom-Up คือ การที่ค่อยๆ เจาะรายละเอียดลงไปในคลาสลูก
