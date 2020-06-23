include "emu8086.inc"
                ; bài 2
.model small
.stack
.data     
    n dw 99; khoi tao bien n chua gia tri 99
    s dw ? ; khoi tao bien s chua ket qua
.code
    mov ax, @data
    mov ds, ax
    
    mov cx, 1
    xor ax, ax
while:
    cmp cx, n
    ja endw
    add ax, cx
    add cx, 2
    jmp while
endw:
    mov s, ax
    call print_num_uns
    mov ah, 4ch
    int 21h
    define_print_num_uns
end
                         
                                                                       