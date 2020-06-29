include "emu8086.inc"
.model small
.stack
.data
    hello db 13,10, 'Nhap chuoi (ket thuc nhan enter)',13,10,'$'
    repost db 13,10, 'chuoi nguoc: ',13,10,'$' 
.code
    mov ax, @data
    mov ds, ax
    
    call nhap
    
    call xuat
    
    mov ah, 4ch
    int 21h
    
    nhap proc
        pop bx 
        mov ax, 3
        int 10h
        
        mov ah, 9
        mov dx, offset hello
        int 21h
        
        xor cx, cx
        
        mov ah, 1
        while:
            int 21h
            cmp al, 13
            je endw
            push ax
            inc cx
            jmp while
        endw:
            push bx
            ret
    nhap endp
    
    xuat proc
        pop bx
        mov ah, 9
        mov dx, offset repost
        int 21h
        
        jcxz endw
        
        mov ah, 2
        while2:
            pop dx
            int 21h
            loop while2
        endw2:
            push bx
            ret
     xuat endp
       
    
end