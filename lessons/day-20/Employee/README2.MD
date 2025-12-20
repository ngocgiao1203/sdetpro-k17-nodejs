# Khái niệm super() và constructor trong kế thừa
#    1. Vai trò của salary trong Constructor của FTE
    **Khi mình code:**
        // Trong FTE.ts
        constructor(salary: number) {
            super(salary);
            // ...
        }

    **Giải thích**
        Tham số salary ở đây không phải là FTE đang tự định nghĩa thêm một thuộc tính salary mới. Thay vào đó, nó chỉ có một vai trò duy nhất:
            - Tiếp nhận dữ liệu: Nó tiếp nhận giá trị lương khi bạn tạo một đối tượng mới:
                new FTE(50000) ← FTE nhận giá trị 50000

            - Chuyển giao trách nhiệm: Nó nhận giá trị đó và chuyển ngay lập tức cho class cha là Employee thông qua lệnh super(salary).

# 2. Ví dụ về Luồng Dữ Liệu:
    Khi bạn chạy lệnh: const nv = new FTE(50000);                                                   | CODE ĐƯỢC THỰC THI

    Bước 1. "FTE" nhận giá trị "50000" và chuyển nó lên constructor của class cha.	                | super(50000);
    Bước 2. Constructor của "Employee" được gọi với giá trị 50000.	                                | constructor(salary: number) {}
    Bước 3. "Employee" sử dụng giá trị này để khởi tạo thuộc tính của chính nó.	                    | this.salary = 50000;
    Bước 4. Sau khi class cha đã hoàn tất việc khởi tạo, "FTE" mới thực hiện công việc riêng của nó.	| this.name = "FTE";

# 3. Tại sao BẮT BUỘC phải dùng super(salary)
    Đây là quy tắc cơ bản trong lập trình hướng đối tượng khi sử dụng kế thừa:
    Nếu Class Cha (Employee) có Constructor nhận parameters, thì Class Con (FTE) phải gọi super() với các parameters đó trong constructor của nó.

# 4. Tại sao không khởi tạo name trong constructor của Employee?
    Dòng code protected name: string = 'Employee'; chính là một hình thức khởi tạo thuộc tính.
    Nó là Khởi tạo Trực tiếp (hoặc tại chỗ).

    Việc này được thực hiện vì giá trị 'Employee' là một giá trị mặc định và cố định cho mọi đối tượng Employee. Nó không cần nhận giá trị động từ bên ngoài như salary.

    Trình biên dịch sẽ tự động gán giá trị này ngay khi đối tượng được tạo, trước cả khi constructor bắt đầu chạy.

# 5. Việc class FTE dùng this.name = "FTE" có sai không?
    Đây là hành động Ghi đè (Override) giá trị mặc định của class cha.

    Sau khi gọi super(salary) (để khởi tạo các thuộc tính cơ bản của Employee, bao gồm cả name với giá trị 'Employee'), class FTE truy cập vào thuộc tính protected name và cập nhật nó thành 'FTE'.

    Mục đích là để chuyên biệt hóa đối tượng: Mọi đối tượng FTE đều là Employee, nhưng tên cụ thể của loại đối tượng này phải là 'FTE'.