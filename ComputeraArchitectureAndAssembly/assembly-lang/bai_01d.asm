include "emu8086.inc"

; S(n) = 1 + (1+2) + (1+2+3) + ...

.model small
.stack
.data
    n dw 3
    s dw ? ; ket qua
.code
    mov ax, @data
    mov ds, ax      
    
    mov ax, 0
    mov bx, 0
    mov cx, 0
    while:
        cmp ax, n ; so sanh ax vs n
        ja endw   ; neu ax > n thi endw
        add ax, bx
        inc bx
        add cx , ax
        jmp while
    endw:
        mov s, cx
        mov ax, s
        
        call print_num_uns
        
        mov ah, 4ch
        int 21h
        define_print_num_uns
end
    
            
        

