# คีย์เวิร์ด this และ super & this() และ super()
ในบทเรียนนี้เราจะมาเรียนรู้กันถึงความแตกต่างของคีย์เวิร์ดทั้ง 4 ตัวกัน โดยแต่ละตัวจะมีความแตกต่างดังนี้
* this : เรียกการทำงานของแอททริบิวท์และเมธอดภายในคลาส
* this() : เรียกคอนสตรัคเตอร์ภายในคลาส
* super : เรียกการใช้งานของแอททริบิวท์และเมธอดของคลาสพ่อแม่
* super() : เรียกคอนสตรัคเตอร์ของคลาสพ่อแม่
```java
public class Student{
    protected String id, name;
    protected double gpa;
  
  public Student (){}
  
  public Student (String id, String name) {
     this.id = id;
     this.name = name;
     this.gpa = 0.0;
  }
  
  public void printDetail(){
    System.out.print(“ID ”+ this.id+ “ Name ” + this.name );
  }
} 
```
จากโปรแกรมข้างต้นจะเห็นได้ว่าเราสามารถทำการเรียกใช้ **this.id** เพื่อเป็นการบอกว่าเราสามารถเรียกใช้ตัวแปร id ได้เนื่องจากอยู่ภายในคลาสเดียวกันนั่นเอง
<br><br>
แต่ถ้าหากเราต้องการเรียกใช้จากคลาสพ่อแม่อื่นก็สามารถทำได้โดยการใช้คีย์เวิร์ด **super** นั่นเอง
## ความสัมพันธ์คอนสตรัคเตอร์ร่วมกับ this() และ super() 
* ถ้ามี this() ในคอนสตรัคเตอร์ : โปรแกรมจะเรียกใช้แบบ overloaded ที่สอดคล้องกับคำสั่ง this() แล้วข้ามไปเรียกคอนสตรัคเตอร์เลย
* ถ้าไม่มีคำสั่ง super() โปรแกรมจะเรียกใช้คอนสตรัคเตอร์แบบ default ของคลาสพ่อแม่ ยกเว้นคลาส Object เพราะไม่มีคลาสพ่อแม่นั่นเอง
* ทุกๆ คอนสตรัคเตอร์จะมี super() อยู่ภายในตัวมันเอง และถ้าหากเขียน super() ต้องเขียนเป็นคำสั่งแรกเท่านั้น

```java
public class Main {
    public static void main(String[] args) {
      Animal d1 = new Animal("Pedd");
      Animal d2 = new Animal();
      
      System.out.println("d1's name is "+ d1.getName());
      System.out.println("d2's name is "+ d2.getName());
    }
}
    
   public class Animal{
     protected String name;
     public Animal(){
        this("");
     } 
     public Animal(String n){
        this.name = n;
     }
     public String getName(){
        return this.name;
     }
     public void setName(String name){
        this.name = name;
     }
   } 
```
จากโปรแกรมดังกล่าวนั้น ถือว่าเป็นการใช้คีย์เวิร์ด this() และ this ร่วมกันทำให้การทำงานภายในโปรแกรมสามารถเข้าใจได้ง่ายขึ้น ซึ่งผลลัพธ์ที่ออกมาจะเป็นดังนี้
```java
d1's name is Pedd
d2's name is
```
