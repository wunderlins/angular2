package net.wunderlin.java.todo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RestTestController {

    @GetMapping("/resttest")
    public String resttest() {
        return "resttest";
    }

}