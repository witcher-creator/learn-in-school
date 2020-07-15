;S(n) = 1 + 3 + 5 + ...           

; b1: dat bx = 1
; b2: ss bx vs n, if bx > n -> b4, else -> b3
; b3: s=s+bx, bx++, ->b2
; b4: xuat s ra man hinh


include "emu8086.inc"

.model small
.stack
.data
    s dw ?
    n dw 20
.code  
    mov ax, @data
    mov ds, ax
    
    mov bx, 1
    mov ax, 0
    while:
        cmp bx, n
        ja endw
        add ax, bx
        add bx, 2
        jmp while
    endw: 
        mov s, ax
        call print_num_uns
        
        mov ah, 4ch
        int 21h
        define_print_num_uns
end        