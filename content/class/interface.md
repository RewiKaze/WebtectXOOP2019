# อินเตอร์เฟส ( Interface )
มีลักษณะคล้ายกับคลาสแบบ abstract แต่จะประกอบด้วย**เมธอดที่ยังไม่สมบูรณ์เท่านั้น** ซึ่งอินเตอร์เฟสจะเหมือนกับคลาสแบบ abstract ตรงที่เราจะไม่สามารถสร้างอ็อบเจ็กต์ของ
อินเตอร์เฟสได้
```java
Modifier abstract InterfaceName {
         // methods
}
```
อินเตอร์เฟสกำหนดขึ้นมาเพื่อให้คลาสอื่นนำไปใช้งาน ควรใช้คีย์เวิร์ด **implements** 
ยกตัวอย่างเช่น
```java
public class Ant implements Animals 
```
ซึ่งสามารถอาศัยหลักการของการมีได้หลายรูปแบบมาเรียกใช้เมธอดเหล่านั้นได้จากคลาสที่ implements อินเตอร์เฟส
<br><br>
โดยภาษาจาวากำหนดให้คลาสใด สามารถสืบทอดคลาสอื่นได้เพียงคลาสเดียวเท่านั้นแต่จะสามารถ _implements_ อินเตอร์เฟสได้**หลายอินเตอร์เฟส**

## แอททริบิวท์และเมธอดของอินเตอร์เฟส
เมธอดของอินเตอร์เฟสจะกำหนดให้เป็น **public static final** (เป็นค่าคงที่) และเมธอดของอินเตอร์เฟสจะกำหนดให้เป็น **public abstract**
```java
interface Moveable {
  public static final int AVERAGE_SPEED = 40;
  public abstract void move();
}

* อินเตอร์เฟส กับ อินเตอร์เฟสจะ extends กันและสามารถ extends ได้มากกว่า 1 อินเตอร์เฟส
```java
public interface Hockey extends Sports, Events {
      // command
}
```
* อินเตอร์เฟสไม่สามารถ implements คลาสได้ แต่ สามารถซ้อน ( extends ) กันเองได้
```java
public interface Student {
  public void setID(String ID);
  public void setName(String n);
  public void showDetails();
}

public class PartTimeStudent implements Student {
  private String id;
  private String name;
  private int credit;
  public PartTimeStudent(int c) {
    credit = c; 
  }
  public void setID(String ID) {
    id = ID; 
  }
  public void setName(String n) { 
    name = n;
  }
  public void showDetails() {
    System.out.println("ID: "+id);
    System.out.println("Name: "+name);
    System.out.println("Credit: "+credit);
  }
}
```
จากโปรแกรมข้างต้นจะเป็นตัวอย่างของการที่ทำให้ interface Student สมบูรณ์ได้โดยผ่าน class ที่ชื่อว่า PartTimeStudent
