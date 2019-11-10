# คลาสไม่สมบูรณ์ ( Abstract Class )
จากบทก่อนหน้านู้นนนน ที่เราได้เรียนรู้เกี่ยวกับพื้นฐานของคลาสไปแล้ว ในบทนี้เราก็จะมาเรียนรู้เกี่ยวกับ **คลาสไม่สมบูรณ์** ที่เป็นประเภทหนึ่งของคลาสกัน
<br><br>
ซึ่งคลาสไม่สมบูรณ์เป็นคลาสที่ไม่สามารถระบุการกระทำ หรือเมธอด ให้ชัดเจนได้ โดยจะมีเมธอดที่ยังไม่สมบูรณ์อย่างน้อยหนึ่งเมธอดอยู่ในคลาส โดยมีรูปแบบของเมธอด ดังนี้
```java
Modifier abstract return_type methodName([arguments]);
```
โดยจะถูกกำหนดมาเพื่อ**ให้คลาสอื่นสืบทอด** โดยคลาสที่มาสืบทอดจะต้องกำหนดบล็อกคำสั่งในเมธอดที่ยังไม่สมบูรณ์ ( บังคับ ) 
<br><br>
นอกจากนี้**ไม่สามารถ**สร้างอ็อบเจ็กต์ของคลาสแบบ abstract ได้
```java
public abstract class Student {
  protected String id;
  protected String name;
  public void setID(String ID) { 
    id = ID; 
  }
  public void setName(String n) { 
    name = n; 
  }
  public abstract void showDetails();
}
```
จากโปรแกรมข้างต้นจะเห็นได้ว่า มีคลาสไม่สมบูรณ์อยู่นั่นก็คือ `public abstract void showDetails();` ซึ่งหน้าที่ของเราก็คือจะต้องทำให้มันสมบูรณ์**ก่อน**ที่จะนำไปใช้งาน!
```java
public class FullTimeStudent extends Student {
  private int credit;
  private final int MAX_YEAR = 4;
  public FullTimeStudent(int c) { 
    credit = c; 
  }
  public void showDetails() {
    System.out.println("ID: "+id);
    System.out.println("Name: "+name);
    System.out.println("Credit: "+credit);
  }
}
public class Main {
  public static void main(String[] args) {
    FullTimeStudent p1 = new FullTimeStudent(72);
    p1.showDetails();
  }
}
```
จะทำให้เห็นได้ว่าตอนนี้คลาสของเราก็มีความ**สมบูรณ์แล้ว** เนื่องจากในคลาส FulltimeStudent ได้ทำให้เมธอด `showDetails()` ที่ไม่สมบูรณ์ในคลาส _Student_ สมบูรณ์
จึงทำให้สามารถใช้งานได้เลย! โดยผลลัพธ์ที่ออกมาก็จะเป็นดังนี้
```
ID: null
Name: null
Credit: 72
```
