import {trigger,style,animate,query,stagger,transition} from '@angular/animations'


export const cargaranimacion = function(){
    return trigger('cargando',[
        transition('* => *',[
            query('leave',[
                 stagger(100,[
                     animate('300ms',style({opacity:0}))
                 ])   

            ],{optional:true}),

            query('enter',[
                style({opacity:0}),
                stagger(100,[
                    animate('300ms',style({opacity:1}))
                ])   

           ],{optional:true})
        ])
    ])

}